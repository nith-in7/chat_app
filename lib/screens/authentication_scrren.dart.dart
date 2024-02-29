import 'dart:io';

import 'package:chat_app/widgets/image_picker_widget.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';

final _firebase = FirebaseAuth.instance;

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final _formKey = GlobalKey<FormState>();

  var _enteredEmail = "";
  var _enteredPassword = "";
  var _username = "";
  File? selectedImage;
  bool isLoading = false;

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  void _onSubmitt() async {
    final ScaffoldMessengerState scaffoldMessenger =
        ScaffoldMessenger.of(context);
    final isValid = _formKey.currentState!.validate();
    if (!isValid) {
      return;
    }

    if (!toSignIn && selectedImage == null) {
      return;
    }

    _formKey.currentState!.save();
    try {
      setState(() {
        isLoading = true;
      });
      if (toSignIn) {
        await _firebase.signInWithEmailAndPassword(
            email: _enteredEmail, password: _enteredPassword);
      } else {
        final userCredential = await _firebase.createUserWithEmailAndPassword(
            email: _enteredEmail, password: _enteredPassword);

        final storageRef = FirebaseStorage.instance
            .ref()
            .child("user_images")
            .child("${userCredential.user!.uid}.jpg");
        await storageRef.putFile(selectedImage!);
        final imageUrl = await storageRef.getDownloadURL();

        await FirebaseFirestore.instance
            .collection("users")
            .doc(userCredential.user!.uid)
            .set({
          "username": _username,
          "email": _enteredEmail,
          "image_url": imageUrl,
        });
      }
    } on FirebaseAuthException catch (error) {
      setState(() {
        isLoading = false;
      });

      scaffoldMessenger.clearSnackBars();
      scaffoldMessenger.showSnackBar(
          SnackBar(content: Text(error.message ?? "Authentication Failed")));
    }
  }

  bool obsure = true;
  bool toSignIn = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: true,
      body: Container(
        alignment: Alignment.center,
        padding: const EdgeInsets.fromLTRB(30, 20, 30, 20),
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          gradient: LinearGradient(colors: [
            Theme.of(context).colorScheme.primary,
            Theme.of(context).colorScheme.primary.withOpacity(.9),
            Theme.of(context).colorScheme.primary.withOpacity(.8)
          ], end: Alignment.topLeft, begin: Alignment.bottomRight),
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Image.asset(
                width: 200,
                height: 250,
                "assets/Images/logo.png",
                color: Colors.white,
              ),
              Container(
                alignment: Alignment.center,
                width: 400,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                    color: Theme.of(context).colorScheme.background,
                    borderRadius: BorderRadius.circular(32)),
                child: Form(
                  key: _formKey,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Align(
                        alignment: Alignment.bottomLeft,
                        child: Text(
                          toSignIn ? "Sign in" : "Sign up",
                          style: Theme.of(context).textTheme.headlineLarge,
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      if (!toSignIn)
                        UserImagePicker(onPickImage: (File pickedImage) {
                          selectedImage = pickedImage;
                        }),
                      // --Username--
                      if (!toSignIn)
                        TextFormField(
                          scrollPadding: EdgeInsets.only(
                              bottom: MediaQuery.of(context).viewInsets.bottom),
                          autocorrect: false,
                          textCapitalization: TextCapitalization.none,
                          onSaved: (newValue) {
                            _username = newValue!;
                          },
                          textInputAction: TextInputAction.next,
                          validator: (value) {
                            if (value == null ||
                                value.trim().isEmpty ||
                                value.length < 6) {
                              return "Username of atleast 6 character is required";
                            }
                            return null;
                          },
                          decoration: InputDecoration(
                            border: const OutlineInputBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(16))),
                            label: const Text("Username"),
                            prefixIcon: Icon(
                              Icons.person_outline,
                              color: Theme.of(context).colorScheme.primary,
                            ),
                          ),
                        ),
                      const SizedBox(
                        height: 24,
                      ),

                      // --Email--
                      TextFormField(
                        scrollPadding: EdgeInsets.only(
                            bottom: MediaQuery.of(context).viewInsets.bottom),
                        autocorrect: false,
                        textCapitalization: TextCapitalization.none,
                        keyboardType: TextInputType.emailAddress,
                        onSaved: (newValue) {
                          _enteredEmail = newValue!;
                        },
                        textInputAction: TextInputAction.next,
                        validator: (value) {
                          if (value == null ||
                              value.trim().isEmpty ||
                              !value.contains("@") ||
                              !(value.contains(".com") ||
                                  value.contains(".in"))) {
                            return "Enter valid email address";
                          }
                          return null;
                        },
                        decoration: InputDecoration(
                          border: const OutlineInputBorder(
                              borderRadius:
                                  BorderRadius.all(Radius.circular(16))),
                          label: const Text("Email"),
                          prefixIcon: Icon(
                            Icons.email_outlined,
                            color: Theme.of(context).colorScheme.primary,
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 24,
                      ),

                      // --Password--
                      TextFormField(
                        scrollPadding: EdgeInsets.only(
                            bottom: MediaQuery.of(context).viewInsets.bottom),
                        autocorrect: false,
                        textCapitalization: TextCapitalization.none,
                        obscureText: obsure,
                        textInputAction: TextInputAction.done,
                        onSaved: (newValue) {
                          _enteredPassword = newValue!;
                        },
                        validator: (value) {
                          if (value == null || value.trim().length < 6) {
                            return "Password must be atleast 6 character length";
                          }
                          return null;
                        },
                        decoration: InputDecoration(
                            border: const OutlineInputBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(16))),
                            label: const Text("Password"),
                            suffixIcon: IconButton(
                              icon: Icon(
                                obsure
                                    ? Icons.visibility_outlined
                                    : Icons.visibility_off_outlined,
                                color: Colors.grey,
                              ),
                              style: IconButton.styleFrom(
                                  splashFactory: NoSplash.splashFactory),
                              onPressed: () {
                                setState(
                                  () {
                                    obsure = !obsure;
                                  },
                                );
                              },
                            ),
                            prefixIcon: Icon(
                              Icons.password_outlined,
                              color: Theme.of(context).colorScheme.primary,
                            )),
                      ),
                      const SizedBox(
                        height: 24,
                      ),
                      Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(40),
                          gradient: LinearGradient(
                              colors: [
                                Theme.of(context).colorScheme.primary,
                                Theme.of(context)
                                    .colorScheme
                                    .primary
                                    .withOpacity(.9),
                              ],
                              begin: Alignment.topRight,
                              end: Alignment.bottomRight),
                        ),
                        height: 50,
                        width: MediaQuery.of(context).size.width,
                        child: !isLoading
                            ? FilledButton(
                                style: FilledButton.styleFrom(
                                    backgroundColor: Colors.transparent,
                                    textStyle: const TextStyle(fontSize: 20)),
                                onPressed: _onSubmitt,
                                child: Text(toSignIn ? "Sign in" : "Sign up"))
                            : const Center(
                                child: CircularProgressIndicator(
                                  color: Colors.white,
                                ),
                              ),
                      )
                    ],
                  ),
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    toSignIn ? "New to ChatApp? " : "Already on ChatApp?",
                    style: Theme.of(context).textTheme.titleMedium!.copyWith(
                        color: Theme.of(context).colorScheme.background),
                  ),
                  TextButton(
                    onPressed: () {
                      setState(() {
                        toSignIn = !toSignIn;
                      });
                    },
                    style: TextButton.styleFrom(
                        splashFactory: NoSplash.splashFactory,
                        foregroundColor: Colors.blue[300],
                        textStyle: const TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 18)),
                    child: Text(toSignIn ? "Join Now" : "Sign in"),
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}

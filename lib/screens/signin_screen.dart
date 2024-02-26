import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

final _firebase = FirebaseAuth.instance;

class SignIn extends StatefulWidget {
  const SignIn({super.key});

  @override
  State<SignIn> createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  final _formKey = GlobalKey<FormState>();

  var _enteredEmail = "";
  var _enteredPassword = "";

  @override
  void initState() {
    super.initState();
  }

  void _onSubmitt() async {
    final isValid = _formKey.currentState!.validate();
    if (!isValid) {
      return;
    }
    _formKey.currentState!.save();
    if (toSignIn) {
    } else {
      try {
        final userCrendials = await _firebase.createUserWithEmailAndPassword(
            email: _enteredEmail, password: _enteredPassword);
        print(userCrendials);
      } on FirebaseAuthException catch (error) {
        if (error.code == "") {}
        ScaffoldMessenger.of(context).clearSnackBars();
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text(error.message ?? "Authentication Failed")));
      }
    }
  }

  bool obsure = true;
  bool toSignIn = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        padding: const EdgeInsets.fromLTRB(30, 30, 30, 0),
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          gradient: LinearGradient(colors: [
            Theme.of(context).colorScheme.primary,
            Theme.of(context).colorScheme.primary.withBlue(200)
          ], end: Alignment.bottomCenter, begin: Alignment.topCenter),
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Image.asset(
                width: 300,
                height: 300,
                "assets/Images/logo.png",
                color: Colors.white,
              ),
              Container(
                alignment: Alignment.center,
                width: 400,
                height: 450,
                decoration: BoxDecoration(
                    color: Theme.of(context).colorScheme.background,
                    borderRadius: BorderRadius.circular(32)),
                child: Form(
                  key: _formKey,
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          toSignIn ? "Sign in" : "Sign up",
                          style: Theme.of(context).textTheme.headlineLarge,
                        ),
                        const SizedBox(
                          height: 30,
                        ),
                        TextFormField(
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
                              )),
                        ),
                        const SizedBox(
                          height: 30,
                        ),
                        TextFormField(
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
                                  setState(() {
                                    obsure = !obsure;
                                  });
                                },
                              ),
                              prefixIcon: Icon(
                                Icons.password_outlined,
                                color: Theme.of(context).colorScheme.primary,
                              )),
                        ),
                        const SizedBox(
                          height: 30,
                        ),
                        SizedBox(
                          height: 50,
                          width: MediaQuery.of(context).size.width,
                          child: FilledButton(
                              style: FilledButton.styleFrom(
                                  textStyle: const TextStyle(fontSize: 20)),
                              onPressed: _onSubmitt,
                              child: Text(toSignIn ? "Sign in" : "Sign up")),
                        )
                      ],
                    ),
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

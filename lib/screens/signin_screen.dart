import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SignIn extends StatefulWidget {
  const SignIn({super.key});

  @override
  State<SignIn> createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  final _formKey = GlobalKey<FormState>();

  var _enteredEmail = "";
  var _enteredPassword = "";
  
  void _onSubmitt() {
    final value = _formKey.currentState!.validate();
    if (value) {
      _formKey.currentState!.save();
    }
  }

  bool obsure = true;
  bool toSignIn = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        padding: const EdgeInsets.all(30),
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
              AnimatedContainer(
                duration: const Duration(milliseconds: 1000),
                curve: Curves.decelerate,
                decoration: BoxDecoration(
                    color: Theme.of(context).colorScheme.background,
                    borderRadius: BorderRadius.circular(20)),
                child: Form(
                  key: _formKey,
                  child: Padding(
                    padding: const EdgeInsets.all(20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          toSignIn ? "Sign in" : "Sign up",
                          style: Theme.of(context).textTheme.headlineLarge,
                        ),
                        const SizedBox(
                          height: 20,
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
                          decoration: const InputDecoration(
                              border: OutlineInputBorder(),
                              label: Text("Email"),
                              prefixIcon: Icon(Icons.email_outlined)),
                        ),
                        const SizedBox(
                          height: 20,
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
                              border: const OutlineInputBorder(),
                              label: const Text("Password"),
                              suffixIcon: TextButton(
                                style: TextButton.styleFrom(
                                    splashFactory: NoSplash.splashFactory),
                                child: obsure
                                    ? const Text("Show")
                                    : const Text("Hide"),
                                onPressed: () {
                                  setState(() {
                                    obsure = !obsure;
                                  });
                                },
                              ),
                              prefixIcon: const Icon(Icons.password_outlined)),
                        ),
                        const SizedBox(
                          height: 20,
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

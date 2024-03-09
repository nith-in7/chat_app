import 'package:chat_app/widgets/chat_messages.dart';
import 'package:chat_app/widgets/new_messages.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  const ChatScreen({super.key});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  void setup() async {
    final fcm = FirebaseMessaging.instance;
    await fcm.requestPermission();
    await fcm.subscribeToTopic("chat");
  }

  @override
  void initState() {
    setup();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          foregroundColor: Colors.white,
          backgroundColor: const Color.fromRGBO(318, 140, 126, 1),
          title: const Text("ChatApp"),
          actions: [
            IconButton(
                onPressed: FirebaseAuth.instance.signOut,
                icon: const Icon(Icons.logout))
          ],
        ),
        body: Container(
          color: const Color.fromRGBO(225, 212, 198, 1),
          padding: const EdgeInsets.only(bottom: 8, right: 4, left: 4),
          child: const Column(
            children: [Expanded(child: ChatMessages()), NewMessage()],
          ),
        ));
  }
}

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

import 'package:flutter/material.dart';

class NewMessage extends StatefulWidget {
  const NewMessage({super.key});

  @override
  State<NewMessage> createState() => _NewMessageState();
}

class _NewMessageState extends State<NewMessage> {
  late TextEditingController textController;
  bool showSend = false;
  final user = FirebaseAuth.instance.currentUser!;
  late DocumentSnapshot<Map<String, dynamic>> body;

  void initiliaseApp() async {
    body = await FirebaseFirestore.instance
        .collection("users")
        .doc(user.uid)
        .get();
  }

  @override
  void initState() {
    textController = TextEditingController();
    initiliaseApp();
    super.initState();
  }

  @override
  void dispose() {
    textController.dispose();
    super.dispose();
  }

  void _onSend() async {
    final enteredText = textController.text.trim();
    textController.clear();
    setState(() {
      showSend = false;
    });

    await FirebaseFirestore.instance.collection("chat").add({
      "text": enteredText,
      "createdAt": Timestamp.now(),
      "userId": user.uid,
      "username": body.data()!["username"],
      "userImage": body.data()!["image_url"]
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 4),
      child: Row(
        children: [
          Container(
            alignment: Alignment.center,
            width: MediaQuery.of(context).size.width / 1.2,
            child: TextField(
             
              maxLines: null,
              textCapitalization: TextCapitalization.sentences,
              textInputAction: TextInputAction.newline,
              keyboardType: TextInputType.multiline,
              onChanged: (value) {
                setState(() {
                  value.trim().isNotEmpty ? showSend = true : showSend = false;
                });
              },
              textAlign: TextAlign.start,
              style: const TextStyle(fontSize: 20),
              decoration: InputDecoration(
                  contentPadding: const EdgeInsets.only(bottom: 55 / 2),
                  prefix: const SizedBox(
                    width: 16,
                  ),
                  hintStyle: const TextStyle(
                      color: Colors.grey, fontWeight: FontWeight.normal),
                  hintText: "Message",
                  border: OutlineInputBorder(
                    borderSide: BorderSide.none,
                    borderRadius: BorderRadius.circular(28),
                  ),
                  filled: true,
                  fillColor: Colors.white),
              controller: textController,
            ),
          ),
          const SizedBox(
            width: 4,
          ),
          Expanded(
              child: IconButton.filled(
            onPressed: showSend ? _onSend : null,
            icon: const Icon(
              Icons.send,
              size: 28,
            ),
            style: IconButton.styleFrom(
                backgroundColor: const Color.fromRGBO(318, 140, 126, 1),
                padding: const EdgeInsets.all(16),
                shape: const CircleBorder()),
          ))
        ],
      ),
    );
  }
}

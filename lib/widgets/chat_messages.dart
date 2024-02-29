import 'package:chat_app/widgets/chat_bubble.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class ChatMessages extends StatelessWidget {
  const ChatMessages({super.key});

  @override
  Widget build(BuildContext context) {
    final presentUser = FirebaseAuth.instance.currentUser;
    return StreamBuilder(
      stream: FirebaseFirestore.instance
          .collection("chat")
          .orderBy('createdAt', descending: true)
          .snapshots(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        }
        if (!snapshot.hasData || snapshot.data!.docs.isEmpty) {
          return const Text("Start the conversion");
        }
        if (snapshot.hasError) {
          return const Text("Encountered an error");
        }
        final data = snapshot.data!.docs;
        return ListView.builder(
          reverse: true,
          itemCount: data.length,
          itemBuilder: (context, index) {
            final chat = data[index].data();
            final currentUser = chat["userId"];
            final nextUser = index + 1 < data.length
                ? data[index + 1].data()["userId"]
                : null;
            final userSame = currentUser == nextUser;

            if (userSame) {
              return ChatBubble.next(
                  isMe: currentUser == presentUser!.uid, text: chat['text']);
            } else {
              return ChatBubble.first(
                  isFirstMessage: true,
                  isMe: currentUser == presentUser!.uid,
                  text: chat['text'],
                  username: chat["username"],
                  userImage: chat["userImage"]);
            }
          },
        );
      },
    );
  }
}

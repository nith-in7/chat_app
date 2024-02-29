import 'package:flutter/material.dart';

class ChatBubble extends StatelessWidget {
  const ChatBubble.first(
      {super.key,
      required this.isFirstMessage,
      required this.isMe,
      required this.text,
      required this.username,
      required this.userImage});

  const ChatBubble.next({
    super.key,
    required this.isMe,
    required this.text,
  })  : userImage = null,
        username = null,
        isFirstMessage = false;

  final bool isFirstMessage;
  final bool isMe;
  final String? username;
  final String? userImage;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        if (userImage != null)
          Positioned(
            top: 15,
            right: isMe ? 0 : null,
            child: CircleAvatar(
              backgroundColor: Theme.of(context).colorScheme.primary,
              radius: 23,
              backgroundImage: NetworkImage(userImage!),
            ),
          ),
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 48),
          child: Row(
            mainAxisAlignment:
                isMe ? MainAxisAlignment.end : MainAxisAlignment.start,
            children: [
              Column(
                crossAxisAlignment:
                    isMe ? CrossAxisAlignment.end : CrossAxisAlignment.start,
                children: [
                  if (isFirstMessage)
                    const SizedBox(
                      height: 20,
                    ),
                    if(isMe && isFirstMessage)
                       Padding(
                      padding: const EdgeInsets.only ( right: 14.0),
                      child: Text(
                        "You",
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.orange[700]),
                      ),
                    ),
                    
                    if (username != null && !isMe )
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8.0),
                      child: Text(
                        username!,
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: isMe ? const Color.fromARGB(255, 239, 162, 84): const Color.fromARGB(255, 220, 90, 3)),
                      ),
                    ),
                  Container(
                    
                    constraints: BoxConstraints(
                        minWidth: 80,
                        maxWidth: MediaQuery.of(context).size.width / 1.5),
                    decoration: BoxDecoration(
                      
                        borderRadius: BorderRadius.only(
                          bottomLeft: const Radius.circular(12),
                          bottomRight: const Radius.circular(12),
                          topRight: isMe && isFirstMessage
                              ? Radius.zero
                              : const Radius.circular(12),
                          topLeft: !isMe && isFirstMessage
                              ? Radius.zero
                              : const Radius.circular(12),
                        ),
                        color: isMe? const Color.fromRGBO(220, 248, 198, 1): Theme.of(context).colorScheme.surface),
                    padding: const EdgeInsets.symmetric(
                        horizontal: 14, vertical: 10),
                    margin: const EdgeInsets.symmetric(horizontal: 2,vertical: 2),
                    child: Text(
                      text,
                     
                      style: const TextStyle(height: 1.5),
                    ),
                  )
                ],
              ),
            ],
          ),
        )
      ],
    );
  }
}

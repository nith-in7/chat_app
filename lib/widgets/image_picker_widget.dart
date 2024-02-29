import 'dart:io';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class UserImagePicker extends StatefulWidget {
  const UserImagePicker({super.key, required this.onPickImage});
  final void Function(File pickedImage) onPickImage;
  @override
  State<UserImagePicker> createState() => _UserImagePickerState();
}

class _UserImagePickerState extends State<UserImagePicker> {
  File? _pickedImageFile;
  ImageSource? source;
  void showOptions() async {
    await showModalBottomSheet(
      backgroundColor: Colors.transparent,
      context: context,
      builder: (context) {
        return BackdropFilter(
          filter: ImageFilter.blur(
            sigmaX: 3,
            sigmaY: 3,
          ),
          child: Container(
            
            decoration: const BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(36),
                topRight: Radius.circular(36),
              ),
            ),
            padding: const EdgeInsets.all(16),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                TextButton(
                  onPressed: () {
                    source = ImageSource.camera;
                    pickImage();
                    Navigator.pop(context);
                  },
                  child: const Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(
                        Icons.camera_alt,
                        size: 40,
                      ),
                      Text("Camera"),
                    ],
                  ),
                ),
                TextButton(
                  onPressed: () {
                    source = ImageSource.gallery;
                    pickImage();
                    Navigator.pop(context);
                  },
                  child: const Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(
                        Icons.upload_file_sharp,
                        size: 40,
                      ),
                      Text("Files"),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  void pickImage() async {
    final XFile? pickedImage = await ImagePicker()
        .pickImage(source: source!, imageQuality: 50, maxWidth: 150);
    if (pickedImage == null) {
      return;
    }
    setState(() {
      _pickedImageFile = File(pickedImage.path);
    });
    widget.onPickImage(_pickedImageFile!);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CircleAvatar(
          
          backgroundImage:
              const AssetImage("assets/Images/profile_placeholder.png"),
          radius: 30,
          backgroundColor: Colors.grey,
          foregroundImage:
              _pickedImageFile == null ? null : FileImage(_pickedImageFile!),
        ),
        TextButton.icon(
            onPressed: showOptions,
            icon: const Icon(Icons.image),
            label: Text(
              "Add Image",
              style: TextStyle(color: Theme.of(context).colorScheme.primary),
            ))
      ],
    );
  }
}

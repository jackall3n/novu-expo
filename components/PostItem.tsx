import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking, View as RNView } from 'react-native';
import { Text, View } from './Themed';

interface Post {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

interface PostItemProps {
  post: Post;
  isRecent: boolean;
}

export default function PostItem({ post, isRecent }: PostItemProps) {
  const handleLearnMore = () => {
    Linking.openURL(post.link);
  };

  return (
    <View style={styles.container}>
      <RNView style={styles.imageContainer}>
        <Image source={{ uri: post.image }} style={styles.image} />
        {isRecent && <Text style={styles.recentTag}>Most Recent</Text>}
      </RNView>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.description}>{post.description}</Text>
      <TouchableOpacity onPress={handleLearnMore} style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  recentTag: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#007AFF',
    color: 'white',
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 40,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
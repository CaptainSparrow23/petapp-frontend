import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface SignInProps {
  onSignIn: () => void;
  onNavigateToSignUp: () => void;
}

const SignIn = ({ onSignIn, onNavigateToSignUp }: SignInProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      
      <TouchableOpacity style={styles.button} onPress={onSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onNavigateToSignUp}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    color: '#666',
    fontSize: 14,
  },
});

export default SignIn;

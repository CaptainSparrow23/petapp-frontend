import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

interface SignUpProps {
  onSignUp: () => void;
  onNavigateToSignIn: () => void;
}

const SignUp = ({ onSignUp, onNavigateToSignIn }: SignUpProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <TouchableOpacity style={styles.button} onPress={onSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onNavigateToSignIn}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
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

export default SignUp;

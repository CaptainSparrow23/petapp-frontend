import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../colors';

interface MainAuthProps {
  onNavigateToSignIn: () => void;
  onNavigateToSignUp: () => void;
}

const MainAuth = ({ onNavigateToSignIn, onNavigateToSignUp }: MainAuthProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/auth.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to PetApp</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={onNavigateToSignIn}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={onNavigateToSignUp}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 60,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: colors.darkest,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.darker,
    lineHeight: 22,
  },
  buttonContainer: {
    gap: 16,
  },
  loginButton: {
    backgroundColor: colors.darkerBeige,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: colors.light,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  registerButtonText: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MainAuth;

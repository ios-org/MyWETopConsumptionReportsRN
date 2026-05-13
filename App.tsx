import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  NativeModules,
  StatusBar,
} from 'react-native';

const { TopConsumptionSDKBridge } = NativeModules;

const SDKCard = ({
  title,
  subtitle,
  inputLabel,
  inputValue,
  onInputChange,
  keyboardType = 'default',
  buttonText,
  onButtonPress,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>

      <View style={styles.inputWrapper}>
        <Text style={styles.floatingLabel}>{inputLabel}</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={onInputChange}
          keyboardType={keyboardType}
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [serviceNumber, setServiceNumber] = useState('1555902481');
  const [subscriberId, setSubscriberId] = useState('1234567');

  const handleTopReports = () => {
    if (!serviceNumber.trim()) {
      Alert.alert('Validation', 'Please enter a Service Number.');
      return;
    }
    TopConsumptionSDKBridge.openTopReports(serviceNumber);
  };

  const handleConsumption = () => {
    if (!subscriberId.trim()) {
      Alert.alert('Validation', 'Please enter a Subscriber ID.');
      return;
    }
    TopConsumptionSDKBridge.openConsumption(subscriberId);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.container}>
        {/* White Header Panel */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>SDK Wrapper Tester</Text>
        </View>

        {/* Card A */}
        <SDKCard
          title="A. Top Reports"
          subtitle="Launches the Top Report dashboard with graph filtration."
          inputLabel="Service Number"
          inputValue={serviceNumber}
          onInputChange={setServiceNumber}
          keyboardType="numeric"
          buttonText="Initiate Top Reports"
          onButtonPress={handleTopReports}
        />

        {/* Card B */}
        <SDKCard
          title="B. Consumption Breakdown"
          subtitle="Launches the tabs. Enter 'TEST_SAME_DATE' to test identical start/end dates."
          inputLabel="Subscriber ID"
          inputValue={subscriberId}
          onInputChange={setSubscriberId}
          keyboardType="default" 
          buttonText="Initiate Consumption Reports"
          onButtonPress={handleConsumption}
        />
      </View>
    </SafeAreaView>
  );
};

const PURPLE = '#702283';

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F8',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: '800',
    color: PURPLE,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: PURPLE,
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#555',
    marginBottom: 20,
    lineHeight: 18,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8,
    marginBottom: 16,
    marginTop: 8,
  },
  floatingLabel: {
    position: 'absolute',
    top: -9,
    left: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 6,
    fontSize: 11,
    color: '#444',
  },
  input: {
    fontSize: 16,
    color: '#1a1a1a',
    padding: 0, 
  },
  button: {
    backgroundColor: PURPLE,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default App;
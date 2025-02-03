import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('2024-12'); // Default to December 2024

  const attendanceData = {
    '2024-12-01': { marked: true, dotColor: 'red', status: 'Absent' },
    '2024-12-08': { marked: true, dotColor: 'green', status: 'Present' },
    '2024-12-10': { marked: true, dotColor: 'green', status: 'Present' },
    '2024-12-18': { marked: true, dotColor: 'red', status: 'Absent' },
    '2024-12-26': { marked: true, dotColor: 'green', status: 'Present' },
    '2024-12-27': { marked: true, dotColor: 'red', status: 'Absent' },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Attendance</Text>
      <Text style={styles.subHeader}>Add your booking dates according to pricing</Text>

      {/* Attendance Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>76%</Text>
          <Text style={styles.statLabel}>Avg Attendance</Text>
          <Text style={styles.statChange}>🔼 +35% from last month</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>121</Text>
          <Text style={styles.statLabel}>Attended Class</Text>
          <Text style={styles.statChange}>🔼 +35% from last month</Text>
        </View>
      </View>

      {/* Calendar */}
      <Calendar
        current={selectedMonth}
        markingType={'dot'}
        markedDates={attendanceData}
        theme={{
          todayTextColor: '#FF5733',
          arrowColor: 'black',
          textDayFontSize: 14,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
      />

      {/* Month Navigation */}
      <View style={styles.monthNav}>
        <TouchableOpacity onPress={() => setSelectedMonth('2024-11')}>
          <Text style={styles.navButton}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>December 2024</Text>
        <TouchableOpacity onPress={() => setSelectedMonth('2025-01')}>
          <Text style={styles.navButton}>➡️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statChange: {
    fontSize: 12,
    color: 'green',
    marginTop: 5,
  },
  monthNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  monthText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  navButton: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Attendance;

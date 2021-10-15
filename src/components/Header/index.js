import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.heading}>Browse Plans</Text>
          <Text style={styles.subHeading}> for Airtel Kolkata</Text>
        </View>
        <View style={styles.closeButton}>
          <Text style={styles.textColorWhite}>X</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Plan Amount, Talktime"
          style={styles.searchInput}
        />
        <AntDesign name="search1" size={20} color={colors.greyPrimary} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 30,
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    color: colors.brandPrimary,
    fontFamily: fonts.primarySemiBold,
  },
  subHeading: {
    fontSize: 18,
    color: colors.grey1,
    fontFamily: fonts.secondaryRegular,
  },
  closeButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColorWhite: {
    color: colors.white,
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: colors.grey2,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    color: colors.grey1,
    fontFamily: fonts.secondaryRegular,
    fontSize: 18,
    width: '90%',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

const ListItem = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceRow}>
        <Text style={styles.price}>₹{data.price}</Text>
        <View style={styles.selectCta}>
          <Text style={styles.ctaText}>Select</Text>
        </View>
      </View>
      <View style={styles.highlightedInfoWrapper}>
        {data.highlightedInfo.map(info => {
          return (
            <Text style={styles.validityText} key={info}>
              {info}
            </Text>
          );
        })}
      </View>
      <Text style={styles.planContent}>{data.description}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  price: {
    fontSize: 24,
    color: '#263238',
    fontFamily: fonts.primaryBold,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  highlightedInfoWrapper: {
    flexDirection: 'row',
  },
  selectCta: {
    borderColor: colors.brandPrimary,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  ctaText: {
    fontFamily: fonts.secondaryNormal,
    color: colors.brandPrimary,
  },
  validityText: {
    fontFamily: fonts.secondaryBold,
    fontSize: 14,
    color: colors.grey1,
    marginTop: 15,
    marginRight: 20,
  },
  planContent: {
    fontFamily: fonts.secondaryLight,
    fontSize: 16,
    marginTop: 10,
    color: colors.grey1,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey3,
    paddingBottom: 10,
  },
});

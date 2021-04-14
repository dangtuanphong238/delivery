import React, { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import ic_arrow_right from '../../assets/images/images/svg/ic_arrow_right.svg';
import ic_camera_white from '../../assets/images/images/svg/ic_camera_white';
import ic_face from '../../assets/images/images/svg/ic_face.svg';
import ic_faq from '../../assets/images/images/svg/ic_faq';
import ic_logout from '../../assets/images/images/svg/ic_logout';
import ic_num_notification from '../../assets/images/images/svg/ic_num_notification';
import ic_question from '../../assets/images/images/svg/ic_question';
import ic_reward_points from '../../assets/images/images/svg/ic_reward_points';
import ic_setting from '../../assets/images/images/svg/ic_setting';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import {
  headline2,
  headline4,
  headline5,
  headline7,
  overline,
  Text
} from '../../components/common/Text';
import useTranslation from '../../i18n';
import { FAQ_SCREEN, LOGIN_SCREEN, NOTIFICATION_SCREEN, POINT_HISTORY_SCREEN, PROFILE_SCREEN, SETTING_SCREEN, SUPPORT_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

function AccountScreen({ route, navigation }) {
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  useEffect(() => { }, []);

  const openGallery = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        // this.setState({
        //   photo: source.uri,
        // });
      }
    });
  };

  const navigationScreen = (name) => () => {
    navigation.navigate(name);
  };

  useEffect(() => {

  }, []);

  const data = [
    {
      id: 1,
      title: t.translate('incomeToday'),
      value: '100.000Đ',
      num: 9,
      background: theme.colors.backgroundTabOrderHistoryHome1,
    },
    {
      id: 2,
      title: t.translate('incomeYesterday'),
      value: '125.000Đ',
      num: 5,
      background: theme.colors.backgroundTabOrderHistoryHome2,
    },
    {
      id: 3,
      title: t.translate('pointTotalCost'),
      value: 0 + ' đ',
      num: 5,
      background: theme.colors.backgroundTabOrderHistoryHome3,
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.containerItem(item, index, data.length, theme)}>
        <Text type={headline7} style={styles.textWhite(theme)}>
          {item.title}
        </Text>
        <Text type={headline4} style={styles.textWhite(theme)}>
          {item.value}
        </Text>
        <View style={styles.flex1}>
          <TouchableOpacity>
            <Text
              type={overline}
              style={[styles.textWhite(theme), styles.txtUnderLine]}
            >
              {t.translate('seeDetails')}
            </Text>
          </TouchableOpacity>
          <Text
            type={overline}
            style={[styles.textWhite(theme), styles.txtNumDeliveries]}
          >
            {item.num} {t.translate('numOfDeliveries')}
          </Text>
        </View>
      </View>
    );
  };
  const keyExtractor = (item, index) => item.id.toString();


  return (
    <ScrollView>
      {/* header */}
      <View style={styles.containerInfo(theme)}>
        <View style={styles.headerView(theme)}>
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(70)}
            SVGIcon={ic_face}
          />
          <TouchableOpacity style={styles.viewCamera} onPress={openGallery}>
            <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(20)}
              SVGIcon={ic_camera_white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerViewCenter(theme)}>
          <TouchableOpacity onPress={navigationScreen(PROFILE_SCREEN)}>
            <Text type={headline2} style={styles.textWhite(theme)}>
              Lyn Nguyễn
            </Text>
          </TouchableOpacity>
          <Text type={headline5} style={styles.textWhite(theme)}>
            51H.12345
          </Text>
          <Text type={headline5} style={styles.textItalics(theme)}>
            Gia nhập tháng 07.2019
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.headerView(theme), styles.alignEnd]}
          onPress={navigationScreen(PROFILE_SCREEN)}
        >
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(30)}
            SVGIcon={ic_arrow_right}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerContent(theme)}>
        <View>
          {/* swiper */}
          <View style={styles.swiperView}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={keyExtractor}
              data={data}
              horizontal={true}
              renderItem={renderItem}
            />
          </View>

          {/* view1 */}
          <View style={styles.viewNotification(theme)}>
            <IconMaterialOrImageOrSvg
              type={IconType.MaterialIcons}
              size={scale(23)}
              // SVGIcon={ic_ring}
              name={'notifications'}
              style={{ color: theme.colors.orangeDark }} />

            <TouchableOpacity onPress={navigationScreen(NOTIFICATION_SCREEN)}>
              <Text type={headline5} style={styles.label}>
                {t.translate('notification')}
              </Text>
            </TouchableOpacity>
            <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(21)}
              SVGIcon={ic_num_notification}
            />
          </View>

          {/* view2 */}
          <View style={styles.directionCol(theme)}>
            <View style={styles.directionRow}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(21)}
                SVGIcon={ic_reward_points}
              />
              <TouchableOpacity onPress={navigationScreen(POINT_HISTORY_SCREEN)}>
                <Text type={headline5} style={styles.label}>
                  {t.translate('rewardPoints')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.directionRow}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(21)}
                SVGIcon={ic_faq}
              />
              <TouchableOpacity onPress={navigationScreen(FAQ_SCREEN)}>
                <Text type={headline5} style={styles.label}>
                  {t.translate('faq')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* view3 */}
          <View style={styles.colNoBorder(theme)}>
            <View style={styles.directionRow}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(21)}
                SVGIcon={ic_setting}
              />
              <TouchableOpacity onPress={navigationScreen(SETTING_SCREEN)}>
                <Text type={headline5} style={styles.label}>
                  {t.translate('setting')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.directionRow}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(21)}
                SVGIcon={ic_question}
              />
              <TouchableOpacity onPress={navigationScreen(SUPPORT_SCREEN)}>
                <Text type={headline5} style={styles.label}>
                  {t.translate('contactHelp')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.directionRow}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(21)}
                SVGIcon={ic_logout}
              />
              <TouchableOpacity onPress={navigationScreen(LOGIN_SCREEN)}>
                <Text type={headline5} style={styles.label}>
                  {t.translate('logout')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerContent: theme => ({
    flex: 3,
  }),
  containerInfo: theme => ({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    backgroundColor: theme.colors.orangeDark,
  }),
  headerView: theme => ({
    flex: 1,
    marginTop: scale(85),
    marginBottom: scale(45),
  }),
  headerViewCenter: theme => ({
    flex: 2,
    marginLeft: scale(10),
    marginTop: scale(85),
    marginBottom: scale(45),
  }),
  alignEnd: { alignItems: 'flex-end', marginBottom: scale(85) },
  textWhite: theme => ({
    color: theme.colors.white,
    marginVertical: scale(2),
  }),
  textItalics: theme => ({
    fontStyle: 'italic',
    color: theme.colors.white,
  }),
  swiperView: {
    height: scale(85),
    marginTop: scale(22),
    marginBottom: scale(35),
    marginLeft: scale(21),
  },
  viewNotification: theme => ({
    paddingBottom: scale(21),
    flexDirection: 'row',
    paddingHorizontal: scale(35),
    borderBottomColor: theme.colors.greyLight4,
    borderBottomWidth: 1,
  }),
  directionCol: theme => ({
    flexDirection: 'column',
    borderBottomColor: theme.colors.greyLight4,
    borderBottomWidth: 1,
    paddingBottom: scale(21),
  }),
  colNoBorder: theme => ({
    flexDirection: 'column',
    paddingBottom: scale(21),
    marginBottom: scale(20),
  }),
  directionRow: {
    marginTop: scale(22),
    marginLeft: scale(38),
    flexDirection: 'row',
  },
  containerItem: (item, index, length, theme) => ({
    width: scale(200),
    height: scale(85),
    padding: scale(8),
    backgroundColor: item.background,
    borderRadius: scale(8),
    marginRight: index !== length - 1 ? scale(12) : scale(0),
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  }),
  txtNumDeliveries: { marginLeft: scale(65) },
  txtUnderLine: {
    textDecorationLine: 'underline',
  },
  flex1: { flex: 1, flexDirection: 'row' },
  label: { marginLeft: scale(22), marginRight: scale(171) },
  viewCamera: {
    position: 'absolute',
    top: '65%',
    left: '60%',
  },
});

export default connect(null, null)(AccountScreen);

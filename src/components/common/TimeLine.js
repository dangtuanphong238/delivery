import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { body3, headline6, overline, Text } from '../../components/common/Text';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import { ORDER_STATUS } from '../../configs/app.config';
const Timeline = ({
  delivered,
  data,
  showTime,
  onEventPress,
  containerStyle,
  rowContainer,
  props,
  listHeaderComponent,
  listFooterComponent,
}) => {
  const theme = useContext(ThemeContext);
  const checkDelivered = delivered === ORDER_STATUS.COMPLETE;
  const defaultCircleSize = scale(14);
  const defaultCircleColor = theme.colors.greyLight1;
  const defaultLineWidth = 2;
  const defaultLineColor = theme.colors.greyLight1;
  const defaultDotColor = 'white';
  const columnFormat = 'single-column-left';

  //Row data style
  //title
  //circleSize
  //icon
  //dotColor
  //circleColor
  //lineWidth
  //timeStyle
  //titleStyle
  //position

  const [state, setState] = useState({
    x: 0,
    width: 0,
  });

  const renderItem = ({ item, index }) => {
    let content = null;
    switch (columnFormat) {
      case 'single-column-left':
        content = (
          <View style={[styles.rowContainer, rowContainer]}>
            {renderEvent(item, index)}
            {renderCircle(item, index)}
            {renderTime(item, index)}
          </View>
        );
        break;
      case 'single-column-right':
        content = (
          <View style={[styles.rowContainer, rowContainer]}>
            {renderEvent(item, index)}
            {renderTime(item, index)}
            {renderCircle(item, index)}
          </View>
        );
        break;
      case 'two-column':
        content =
          (item.position && item.position === 'right') ||
            (!item.position && index % 2 === 0) ? (
            <View style={[styles.rowContainer, rowContainer]}>
              {renderTime(item, index)}
              {renderEvent(item, index)}
              {renderCircle(item, index)}
            </View>
          ) : (
            <View style={[styles.rowContainer, rowContainer]}>
              {renderEvent(item, index)}
              {renderTime(item, index)}
              {renderCircle(item, index)}
            </View>
          );
        break;
    }
    return <View key={index}>{content}</View>;
  };

  const renderTime = (rowData, rowID) => {
    if (!showTime) {
      return null;
    }
    var timeWrapper = null;
    switch (columnFormat) {
      case 'single-column-left':
        timeWrapper = {
          alignItems: 'flex-end',
        };
        break;
      case 'single-column-right':
        timeWrapper = {
          alignItems: 'flex-start',
        };
        break;
      case 'two-column':
        timeWrapper = {
          flex: 1,
          alignItems:
            (rowData.position && rowData.position === 'right') ||
              (!rowData.position && rowID % 2 === 0)
              ? 'flex-end'
              : 'flex-start',
        };
        break;
    }
    return (
      <View style={timeWrapper}>
        <View style={styles.timeContainer}>
          <Text style={[styles.time, rowData.timeStyle]}>{rowData.time}</Text>
        </View>
      </View>
    );
  };

  const renderEvent = (rowData, rowID) => {
    const lineWidth = rowData.lineWidth ? rowData.lineWidth : defaultLineWidth;
    const isLast = data.slice(-1)[0] === rowData;
    const lineColor = isLast
      ? 'rgba(0,0,0,0)'
      : rowData.lineColor
        ? rowData.lineColor
        : defaultLineColor;
    let opStyle = null;

    switch (columnFormat) {
      case 'single-column-left':
        opStyle = {
          borderColor: lineColor,
          borderLeftWidth: lineWidth,
          borderStyle: 'dashed',
          borderRadius: 1,
          borderRightWidth: 0,
          marginLeft: 20,
          paddingLeft: 20,
        };
        break;
      case 'single-column-right':
        opStyle = {
          borderColor: lineColor,
          borderLeftWidth: 0,
          borderRightWidth: lineWidth,
          marginRight: 20,
          paddingRight: 20,
        };
        break;
      case 'two-column':
        opStyle =
          (rowData.position && rowData.position === 'right') ||
            (!rowData.position && rowID % 2 === 0)
            ? {
              borderColor: lineColor,
              borderLeftWidth: lineWidth,
              borderRightWidth: 0,
              marginLeft: 20,
              paddingLeft: 20,
            }
            : {
              borderColor: lineColor,
              borderLeftWidth: 0,
              borderRightWidth: lineWidth,
              marginRight: 20,
              paddingRight: 20,
            };
        break;
    }

    return (
      <View
        style={[styles.details(defaultLineWidth), opStyle]}
        onLayout={evt => {
          if (!state.x && !state.width) {
            const { x, width } = evt.nativeEvent.layout;
            setState({ x, width });
          }
        }}
      >
        {/* <TouchableOpacity onPress={onPressEvent(rowData)}>
          <View style={styles.detail}>{renderDetail(rowData, rowID)}</View>
        </TouchableOpacity> */}
        <View onPress={onPressEvent(rowData)}>
          <View style={styles.detail}>{renderDetail(rowData, rowID)}</View>
        </View>
      </View>
    );
  };

  const onPressEvent = rowData => {
    onEventPress ? onEventPress(rowData) : null;
  };

  const renderDetailWhenDelivered = (rowData, rowID) => {
    return (
      <View style={styles.container}>
        <Text type={headline6} style={[styles.title, rowData.titleStyle]}>
          {rowData.address_name}
        </Text>
        <Text type={overline} >
          {rowData.title}
        </Text>
      </View>
    )
  }

  const renderDetail = (rowData, rowID) => {
    return (
      <>
        {checkDelivered ? renderDetailWhenDelivered(rowData, rowID) :
          <View style={styles.container}>
            <Text type={body3} style={[styles.title, rowData.titleStyle]}>
              {rowData.title}
            </Text>
          </View>}
      </>
    );
  };

  const renderCircle = (rowData, rowID) => {
    var circleSize = rowData.circleSize
      ? rowData.circleSize
      : defaultCircleSize;
    var circleColor = rowData.circleColor
      ? rowData.circleColor
      : defaultCircleColor;
    var lineWidth = rowData.lineWidth ? rowData.lineWidth : defaultLineWidth;

    var circleStyle = null;

    switch (columnFormat) {
      case 'single-column-left':
        circleStyle = {
          width: state.x ? circleSize : 0,
          height: state.x ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: state.x - circleSize / 2 + (lineWidth - 1) / 2,
        };
        break;
      case 'single-column-right':
        circleStyle = {
          width: state.width ? circleSize : 0,
          height: state.width ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: state.width - circleSize / 2 - (lineWidth - 1) / 2,
        };
        break;
      case 'two-column':
        circleStyle = {
          width: state.width ? circleSize : 0,
          height: state.width ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: state.width - circleSize / 2 - (lineWidth - 1) / 2,
        };
        break;
    }

    var innerCircle = null;
    switch (innerCircle) {
      case 'icon':
        let iconDefault = rowData.iconDefault;
        let iconSource = rowData.icon ? rowData.icon : iconDefault;
        if (React.isValidElement(iconSource)) {
          innerCircle = iconSource;
          break;
        }
        if (rowData.icon) {
          iconSource =
            rowData.icon.constructor === String
              ? { uri: rowData.icon }
              : rowData.icon;
        }
        let iconStyle = {
          height: circleSize,
          width: circleSize,
        };
        innerCircle = (
          <Image
            source={iconSource}
            defaultSource={typeof iconDefault === 'number' && iconDefault}
            style={iconStyle}
          />
        );
        break;
      case 'dot':
        const dotSize = circleSize / 2;
        let dotStyle = {
          height: dotSize,
          width: dotSize,
          borderRadius: circleSize / 4,
          backgroundColor: rowData.dotColor
            ? rowData.dotColor
            : defaultDotColor,
        };
        innerCircle = <View style={[styles.dot(defaultDotColor), dotStyle]} />;
        break;
      case 'element':
        innerCircle = rowData.icon;
        break;
    }
    return <View style={[styles.circle, circleStyle]}>{innerCircle}</View>;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent && listHeaderComponent}
        ListFooterComponent={listFooterComponent && listFooterComponent}
        keyExtractor={(item, index) => index + ''}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeContainer: {
    minWidth: 45,
  },
  time: {
    textAlign: 'right',
    overflow: 'hidden',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 10,
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: defaultDotColor => ({
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: defaultDotColor,
  }),
  title: {},
  details: defaultLineWidth => ({
    borderLeftWidth: defaultLineWidth,
    flexDirection: 'column',
    flex: 1,
  }),
  detail: { paddingBottom: 20 },
});

export default Timeline;

import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native'
import { ThemeContext } from '../../../theme';
import { scale, WINDOW_WIDTH } from '../../../theme/dimens';
import { Text, headline6, caption, headline5 } from '../../../components/common/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatCard = ({
    side,// Default: false = Left card chat 
    image,
    content,
    time,
    visibleTime,//Default: false = invisible
}) => {
    const theme = useContext(ThemeContext);
    const avatar = ({ image }) => {
        return (
            <Image
                source={image}
                resizeMode={'contain'}
            />
        )
    }
    const [viewTime, setViewTime] = useState(visibleTime)
    let _maxWidthContentChat = WINDOW_WIDTH * (3 / 4)
    const contentChat = ({ color, content }) => {
        return (
            <View style={{
                backgroundColor: color,
                marginRight: scale(11),
                borderRadius: scale(25),
                maxWidth: scale(_maxWidthContentChat)
            }}>
                <Text style={{
                    fontSize: scale(13),
                    paddingLeft: scale(17),
                    paddingRight: scale(12),
                    paddingVertical: scale(11),
                }} type={headline5}>{content}</Text>
            </View>
        )
    }

    const leftChatCard = ({ image, content, time }) => {
        return (
            <View style={{ flexDirection: 'row', marginLeft: scale(15), marginVertical: scale(10) }}>
                <View style={{ width: scale(32), height: scale(32), borderRadius: scale(16) }}>
                    {image ? avatar({ image: image }) : null}
                </View>
                <TouchableOpacity onPress={handleViewTime} style={{
                    // shadowColor: theme.colors.shadowChat,
                    // shadowOffset: { width: 0, height: 10, },
                    // // shadowOpacity: 0.25,
                    // shadowRadius: 7,
                    // elevation: 5
                    shadowColor: theme.colors.shadowChat,
                    shadowOffset: { width: 10, height: 10 }, // change this for more shadow
                    shadowOpacity: 0.4,
                    shadowRadius: 6,
                    marginLeft: scale(11),
                }}>
                    {contentChat({ color: theme.colors.leftChat, content: content })}
                    {viewTime ? null : (time ? <Text style={{ color: '#9A9A9A', marginTop: scale(10) }} type={headline6}>{time}</Text> : null)}
                </TouchableOpacity>
            </View >
        )
    }

    const rightChatCard = ({ image, content, time }) => {
        return (

            <View style={{ flexDirection: 'row-reverse', marginLeft: scale(10), marginVertical: scale(10) }}>
                <View style={{ width: scale(32), height: scale(32), borderRadius: scale(16) }}>
                    {image ? avatar({ image: image }) : null}
                </View>
                <TouchableOpacity onPress={handleViewTime} style={{
                    // shadowColor: theme.colors.shadowChat,
                    // shadowOffset: { width: 0, height: 10, },
                    // // shadowOpacity: 0.25,
                    // shadowRadius: 7,
                    // elevation: 5
                    shadowColor: theme.colors.shadowChat,
                    shadowOffset: { width: 10, height: 10 }, // change this for more shadow
                    shadowOpacity: 0.4,
                    shadowRadius: 6,
                }}>
                    {contentChat({ color: theme.colors.rightChat, content: content })}
                    {viewTime ? null : (time ? <Text style={{ color: '#9A9A9A', marginTop: scale(10), textAlign: 'right', marginLeft: scale(12), }} type={headline6}>{time}</Text> : null)}
                </TouchableOpacity>
            </View>
        )
    }

    const handleViewTime = () => {
        setViewTime(!viewTime)
    }

    return (
        <View>
            { side ? rightChatCard({ image: image, content: content, time: time }) : leftChatCard({ image: image, content: content, time: time })}
        </View>
    )
}

export default ChatCard;
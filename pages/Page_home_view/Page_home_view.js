import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_image_38_link} from './assets/imageLinks.js'
import {image_image_18_2_link} from './assets/imageLinks.js'
import {image_image_23_2_link} from './assets/imageLinks.js'
import {image_image_18_3_link} from './assets/imageLinks.js'
import {image_image_23_3_link} from './assets/imageLinks.js'
import {image_image_39_link} from './assets/imageLinks.js'
import {image_image_18_4_link} from './assets/imageLinks.js'
import {image_image_23_4_link} from './assets/imageLinks.js'
import {image_image_18_5_link} from './assets/imageLinks.js'
import {image_image_23_5_link} from './assets/imageLinks.js'
import {image_image_42_link} from './assets/imageLinks.js'
import {image_favorites_icon_link} from './assets/imageLinks.js'
import {image_image_55_link} from './assets/imageLinks.js'
import {image_image_28_link} from './assets/imageLinks.js'
import {image_image_28_2_link} from './assets/imageLinks.js'
const Page_home_view  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_Nav_Icons = () => {
					navigation.navigate("Page_home_view")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={true} showsVerticalScrollIndicator={true} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page0]}    >
			<View style = {noneModeStyles._viewport}    >

				

				{/* Work together logo */}
				<View style = {noneModeStyles._image_55_container}    >
					<View style = {noneModeStyles._image_55}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_55_link}}/>
					</View>
				</View>

				{/* This is the search bar */}

				<View style = {noneModeStyles._Rectangle_67}    >
				</View>

				<View style = {noneModeStyles._layer_47b928}   >
					<Svg  viewBox = "null">
						<Path fill = {"none"} fillRule = {"nonzero"}    d = "M 20.936908309648615 18.562419276588532 L 14.119814237258032 12.069947205582373 C 15.177684616811893 10.767452907957782 15.749931507408453 9.174960100347464 15.749931507408453 7.4999673844802155 C 15.749931507408453 5.494976179989451 14.928309399518145 3.61498414580564 13.44256590070676 2.197490291065476 C 11.956822401895376 0.7799964363253118 9.977581569889107 0 7.874965753704227 0 C 5.772349937519345 0 3.7931083044301337 0.782496482673682 2.30736480561875 2.197490291065476 C 0.8189962581415777 3.61248409945727 0 5.494976179989451 0 7.4999673844802155 C 0 9.502458637989626 0.8216213068073666 11.387449906567026 2.30736480561875 12.80244371495882 C 3.7931083044301337 14.219937569698983 5.769724988988925 14.999934768960431 7.874965753704227 14.999934768960431 C 9.633708105364837 14.999934768960431 11.303201205637457 14.454937158094939 12.670820218143277 13.449941509501187 L 19.487915892699746 19.939912675855826 C 19.507905287190095 19.95896152223154 19.53163875090401 19.974072900661298 19.557762314418646 19.98438269731035 C 19.583885877933284 19.994692493959406 19.611887226802583 19.999999999999996 19.640164910171517 20 C 19.66844259354045 19.999999999999996 19.696442340243866 19.994692493959406 19.722565903758504 19.98438269731035 C 19.74868946727314 19.974072900661298 19.77242453315294 19.95896152223154 19.792413927643288 19.939912675855826 L 20.936908309648615 18.852417405106195 C 20.956909598343113 18.83337988654396 20.972776545694366 18.8107765877688 20.98360183217587 18.785897003469145 C 20.994427118657377 18.76101741916949 21 18.734349467865396 21 18.70741834084736 C 21 18.680487213829327 20.994427118657377 18.653820788397507 20.98360183217587 18.628941204097853 C 20.972776545694366 18.6040616197982 20.956909598343113 18.581456795150768 20.936908309648615 18.562419276588532 L 20.936908309648615 18.562419276588532 Z M 12.032948312526411 11.459950773834677 C 10.9199531126154 12.517446155972983 9.444708907248863 13.099943031558777 7.874965753704227 13.099943031558777 C 6.305222600159591 13.099943031558777 4.829979195875994 12.517446155972983 3.7169839959649833 11.459950773834677 C 2.606613844719761 10.399955345348 1.9949913242717374 8.994960864046535 1.9949913242717374 7.4999673844802155 C 1.9949913242717374 6.004973904913896 2.606613844719761 4.5974801402001955 3.7169839959649833 3.539984758061889 C 4.829979195875994 2.4824893759235818 6.305222600159591 1.8999917374016546 7.874965753704227 1.8999917374016546 C 9.444708907248863 1.8999917374016546 10.922578161281189 2.4799893295752113 12.032948312526411 3.539984758061889 C 13.143318463771633 4.599980186548566 13.754940183136716 6.004973904913896 13.754940183136716 7.4999673844802155 C 13.754940183136716 8.994960864046535 13.143318463771633 10.402455391696371 12.032948312526411 11.459950773834677 Z"/>
					</Svg>
				</View>

				<Text>Hello world</Text>

				{/* Next we need to creat a templete for  buisnesses boxes */}

				


				
				
				{/* <View style = {noneModeStyles._Frame_1}    >
					<View style = {noneModeStyles._image_18}    >
					</View>
					<View style = {noneModeStyles._image_23}    >
					</View>
					<View style = {noneModeStyles._image_37}    >
					</View>
					<View style = {noneModeStyles._image_38_container}    >
						<View style = {noneModeStyles._image_38}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_38_link}}/>
						</View>
					</View>
				</View>
				
				<Text style = {noneModeStyles._Logo_Lawncare}   >
					Logo Lawncare
				</Text>
				<View style = {noneModeStyles._Frame_11}    >
					<View style = {noneModeStyles._image_18_container}    >
						<View style = {noneModeStyles._image_18_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_18_2_link}}/>
						</View>
					</View>

					<View style = {noneModeStyles._image_23_container}    >
						<View style = {noneModeStyles._image_23_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_23_2_link}}/>
						</View>
					</View>

					<View style = {noneModeStyles._Frame_1_2}    >
						<View style = {noneModeStyles._image_18_container_2}    >
							<View style = {noneModeStyles._image_18_3}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_18_3_link}}/>
							</View>
						</View>
						<View style = {noneModeStyles._image_23_container_2}    >
							<View style = {noneModeStyles._image_23_3}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_23_3_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._image_39_container}    >
						<View style = {noneModeStyles._image_39}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_39_link}}/>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_12}    >
					<View style = {noneModeStyles._image_18_container_3}    >
						<View style = {noneModeStyles._image_18_4}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_18_4_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._image_23_container_3}    >
						<View style = {noneModeStyles._image_23_4}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_23_4_link}}/>
						</View>
					</View>
					<View style = {noneModeStyles._Frame_1_3}    >
						<View style = {noneModeStyles._image_18_container_4}    >
							<View style = {noneModeStyles._image_18_5}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_18_5_link}}/>
							</View>
						</View>
						<View style = {noneModeStyles._image_23_container_4}    >
							<View style = {noneModeStyles._image_23_5}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_23_5_link}}/>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_13}    >
					<View style = {noneModeStyles._image_18_6}    >
					</View>
					<View style = {noneModeStyles._image_23_6}    >
					</View>
					<View style = {noneModeStyles._image_37_2}    >
					</View>
					<View style = {noneModeStyles._image_42_container}    >
						<View style = {noneModeStyles._image_42}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_42_link}}/>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Werken}   >
					Werken
				</Text>
				<Text style = {noneModeStyles._Fresh_Cut__}   >
					Fresh Cut✂️
				</Text>
				<View style = {noneModeStyles._nav_bar}    >
				</View>
				<View style = {noneModeStyles._nav_bar_icons}    >
					<View style = {noneModeStyles._Nav_Icons}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Nav_Icons();}} onStartShouldSetResponderCapture = {() => true}>
						<View style = {noneModeStyles._favorites_icon_container}    >
							<View style = {noneModeStyles._favorites_icon}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_favorites_icon_link}}/>
							</View>
						</View>
						<View style = {noneModeStyles._layer_e3f69a}   >
							<Svg  viewBox = "null">
								<Path fill = {"none"} fillRule = {"evenodd"}    d = "M 20.75390625 21.08333396911621 C 20.75390625 21.08333396911621 22.640625 21.08333384990692 22.640625 19.32638931274414 C 22.640625 17.56944477558136 20.75390625 12.298611640930176 11.3203125 12.298611640930176 C 1.88671875 12.298611640930176 0 17.56944477558136 0 19.32638931274414 C 0 21.08333384990692 1.88671875 21.08333396911621 1.88671875 21.08333396911621 L 20.75390625 21.08333396911621 Z M 1.9282267093658447 19.32638931274414 L 20.712398529052734 19.32638931274414 C 20.721234215423465 19.325429838732816 20.73004073742777 19.324258705135435 20.738811492919922 19.3228759765625 L 20.75390625 19.31936264038086 C 20.752019531209953 18.887154281139374 20.463351726531982 17.587013721466064 19.18415641784668 16.39580535888672 C 17.954015731811523 15.250277519226074 15.639011859893799 14.055556297302246 11.3203125 14.055556297302246 C 6.99972677230835 14.055556297302246 4.686609506607056 15.250277519226074 3.4564688205718994 16.39580535888672 C 2.1772735118865967 17.587013721466064 1.8904921875800937 18.887154281139374 1.88671875 19.31936264038086 C 1.9005275089293718 19.32184236147441 1.9143643770366907 19.324183981167153 1.9282267093658447 19.32638931274414 Z M 11.3203125 8.784722328186035 C 12.321090340614319 8.784722328186033 13.280878126621246 8.414510488510132 13.988534927368164 7.755528450012207 C 14.696191728115082 7.096546411514282 15.09375 6.202774822711945 15.09375 5.270833492279053 C 15.09375 4.338892161846161 14.696191728115082 3.4451205730438232 13.988534927368164 2.7861385345458984 C 13.280878126621246 2.1271564960479736 12.321090340614319 1.7569445371627816 11.3203125 1.7569445371627808 C 10.319534659385681 1.7569445371627816 9.359745919704437 2.1271564960479736 8.65208911895752 2.7861385345458984 C 7.944432318210602 3.4451205730438232 7.5468750000000036 4.338892161846161 7.546875 5.270833492279053 C 7.546875000000002 6.202774822711945 7.944432318210602 7.096546411514282 8.65208911895752 7.755528450012207 C 9.359745919704437 8.414510488510132 10.319534659385681 8.784722328186033 11.3203125 8.784722328186035 Z M 16.98046875 5.270833492279053 C 16.98046875 6.668745517730713 16.384133219718933 8.00940215587616 15.322648048400879 8.997875213623047 C 14.261162877082825 9.986348271369934 12.821479320526123 10.541666984558105 11.3203125 10.541666984558105 C 9.819145679473877 10.541666984558105 8.379463076591492 9.986348271369934 7.3179779052734375 8.997875213623047 C 6.256492733955383 8.00940215587616 5.66015625 6.668745517730713 5.66015625 5.270833492279053 C 5.66015625 3.8729214668273926 6.256492733955383 2.5322645902633667 7.3179779052734375 1.5437915325164795 C 8.379463076591492 0.5553184747695923 9.819145679473877 1.5604802225180066e-15 11.3203125 0 C 12.821479320526123 7.802401112590033e-16 14.261162877082825 0.5553184747695923 15.322648048400879 1.5437915325164795 C 16.384133219718933 2.5322645902633667 16.980468749999996 3.8729214668273926 16.98046875 5.270833492279053 Z"/>
								<Path fill = {"none"} fillRule = {"none"}    d = "M 1.8961526155471802 19.42477798461914 L 1.8961526155471802 19.4212646484375 M 20.746360778808594 19.42477798461914 L 20.746360778808594 19.4212646484375"/>
							</Svg>
						</View>
						<View style = {noneModeStyles._layer_062541}   >
							<Svg  viewBox = "null">
								<Path fill = {"none"} fillRule = {"nonzero"}    d = "M 7.21875 14.14285659790039 L 7.21875 22 L 0 22 L 0 7.857142448425293 L 10.828125 0 L 21.65625 7.857142448425293 L 21.65625 22 L 14.4375 22 L 14.4375 14.14285659790039 L 7.21875 14.14285659790039 Z"/>
							</Svg>
						</View>
					</View>
				</View> */}

				
				
				
				{/*<View style = {noneModeStyles._Mask_Group}    >
					<View style = {noneModeStyles._image_28_container}    >
						<View style = {noneModeStyles._image_28}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_28_link}}/>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Fresh_Cut___2}   >
					Fresh Cut✂️
				</Text>
				<View style = {noneModeStyles._Mask_Group_2}    >
					<View style = {noneModeStyles._image_6}    >
					</View>
					<View style = {noneModeStyles._image_28_container_2}    >
						<View style = {noneModeStyles._image_28_2}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_28_2_link}}/>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._layer_79d516}   >
					expo install @expo-google-fonts/dev expo-font expo-app-loading
				</Text>
				<Text style = {noneModeStyles._layer_f1c62f}   >
					expo install @expo-google-fonts/dev expo-font expo-app-loading
				</Text> */}
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_home_view

const noneModeStyles = StyleSheet.create({
_page0: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "white",
	},
_viewport: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "white",
	},
_Rectangle_67: {
	width: 323,
	height: 49,
	backgroundColor: "rgb(229, 229, 229)",
	position: "absolute",
	left: 24,
	top: 108,
	borderRadius: 15,
	},
_layer_47b928: {
	position: "absolute",
	transform: [
		{translateX: 42},
		{translateY: 122},
	],
	},
_Frame_1: {
	width: 295,
	height: 240,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 42,
	top: 252,
	},
_image_18: {
	width: 210.031,
	height: 171.979,
	position: "absolute",
	left: -66.8643,
	top: -13,
	},
_image_23: {
	width: 143,
	height: 125,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_37: {
	width: 282,
	height: 240,
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_image_38_container: {
	width: 400.078,
	height: 272.711,
	position: "absolute",
	left: -66.7847,
	top: -16,
	transform: [
		{translateX: -29},
	],
	},
_image_38: {
	width: "100%",
	height: "100%",
	top: 0,
	right: 34,
	},
_Logo_Lawncare: {
	width: 202,
	height: 12,
	position: "absolute",
	left: 114,
	top: 211,
	color: "rgb(70, 70, 70)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Montserrat Alternates",
	textAlign: "left",
	},
_Frame_11: {
	width: 143,
	height: 131,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 42,
	top: 747,
	},
_image_18_container: {
	width: 210.031,
	height: 171.979,
	position: "absolute",
	left: -66.8643,
	top: -13,
	},
_image_18_2: {
	width: "100%",
	height: "100%",
	},
_image_23_container: {
	width: 143,
	height: 125,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_23_2: {
	width: "100%",
	height: "100%",
	},
_Frame_1_2: {
	width: 143,
	height: 131,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_18_container_2: {
	width: 210.031,
	height: 171.979,
	position: "absolute",
	left: -66.8643,
	top: -13,
	},
_image_18_3: {
	width: "100%",
	height: "100%",
	},
_image_23_container_2: {
	width: 143,
	height: 125,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_23_3: {
	width: "100%",
	height: "100%",
	},
_image_39_container: {
	width: 143,
	height: 109,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_39: {
	width: "100%",
	height: "100%",
	},
_Frame_12: {
	width: 143,
	height: 131,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 194,
	top: 747,
	},
_image_18_container_3: {
	width: 210.031,
	height: 171.979,
	position: "absolute",
	left: -66.8643,
	top: -13,
	},
_image_18_4: {
	width: "100%",
	height: "100%",
	},
_image_23_container_3: {
	width: 143,
	height: 125,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_23_4: {
	width: "100%",
	height: "100%",
	},
_Frame_1_3: {
	width: 143,
	height: 131,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_18_container_4: {
	width: 210.031,
	height: 171.979,
	position: "absolute",
	left: -66.8643,
	top: -13,
	},
_image_18_5: {
	width: "100%",
	height: "100%",
	},
_image_23_container_4: {
	width: 143,
	height: 125,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_23_5: {
	width: "100%",
	height: "100%",
	},
_Frame_13: {
	width: 295,
	height: 240,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 43,
	top: 587,
	},
_image_18_6: {
	width: 210.031,
	height: 171.979,
	position: "absolute",
	left: -66.8643,
	top: -13,
	},
_image_23_6: {
	width: 143,
	height: 125,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_37_2: {
	width: 282,
	height: 240,
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_image_42_container: {
	width: 282,
	height: 169,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_42: {
	width: "100%",
	height: "100%",
	},
_Werken: {
	width: 202,
	height: 12,
	position: "absolute",
	left: 118,
	top: 546,
	color: "rgb(70, 70, 70)",
	fontSize: 18,
	fontWeight: "600",
	fontFamily: "Montserrat Alternates",
	textAlign: "left",
	},
_Fresh_Cut__: {
	width: 100,
	height: 39,
	position: "absolute",
	left: 146,
	top: 825,
	color: "rgb(128, 128, 128)",
	fontSize: 16,
	fontWeight: "400",
	lineHeight: 42,
	fontFamily: "Montserrat Alternates",
	textAlign: "left",
	},
_nav_bar: {
	width: 375,
	height: 70,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: -2,
	top: 745,
	borderRadius: 30,
	},
_nav_bar_icons: {
	width: 233,
	height: 40,
	position: "absolute",
	transform: [
		{translateX: 64},
		{translateY: 763},
	],
	},
_Nav_Icons: {
	width: 233,
	height: 40,
	position: "absolute",
	},
_favorites_icon_container: {
	width: 36,
	height: 40,
	position: "absolute",
	left: 0,
	top: 0,
	},
_favorites_icon: {
	width: "100%",
	height: "100%",
	},
_layer_e3f69a: {
	position: "absolute",
	transform: [
		{translateX: 210.359},
		{translateY: 7},
	],
	},
_layer_062541: {
	position: "absolute",
	transform: [
		{translateX: 107},
		{translateY: 7},
	],
	},
_image_55_container: {
	width: 260,
	height: 49,
	position: "absolute",
	left: 57,
	top: 51,
	},
_image_55: {
	width: "100%",
	height: "100%",
	},
_Mask_Group: {
	width: 50.9091,
	height: 50,
	position: "absolute",
	transform: [
		{translateX: 43},
		{translateY: 194},
	],
	},
_image_28_container: {
	width: 62.4793,
	height: 56.8182,
	position: "absolute",
	left: -4.24251,
	top: -6.81812,
	},
_image_28: {
	width: "100%",
	height: "100%",
	},
_Fresh_Cut___2: {
	width: 100,
	height: 39,
	position: "absolute",
	left: 145,
	top: 490,
	color: "rgb(128, 128, 128)",
	fontSize: 16,
	fontWeight: "400",
	lineHeight: 42,
	fontFamily: "Montserrat Alternates",
	textAlign: "left",
	},
_Mask_Group_2: {
	width: 64,
	height: 58,
	position: "absolute",
	transform: [
		{translateX: 43},
		{translateY: 529},
	],
	},
_image_6: {
	width: 293.12,
	height: 343.36,
	position: "absolute",
	left: -84.3637,
	top: -115.121,
	},
_image_28_container_2: {
	width: 78.5455,
	height: 65.9091,
	position: "absolute",
	left: -4.36372,
	top: -1.31824,
	},
_image_28_2: {
	width: "100%",
	height: "100%",
	},
_layer_79d516: {
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "normal",
	fontFamily: "sans-serif",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_layer_f1c62f: {
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "normal",
	fontFamily: "sans-serif",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
})


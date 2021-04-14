import React, { useEffect, useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Flag from 'react-native-flags';
export default
    Countries =

    [
        {
            "value": "Afghanistan",
            "dial_code": "+93",
            "code": "AF",
            "icon": () => <View style={styles.viewIcon}><Flag code='AF' size={32} /><Text> ( +93 )</Text></View>,
            "label": "Afghanistan"
        },
        {
            "value": "Albania",
            "dial_code": "+355",
            "code": "AL",
            "icon": () => <View style={styles.viewIcon}><Flag code='AL' size={32} /><Text> ( +355 )</Text></View>,
            "label": "Albania"
        },
        {
            "value": "Algeria",
            "dial_code": "+213",
            "code": "DZ",
            "icon": () => <View style={styles.viewIcon}><Flag code='DZ' size={32} /><Text> ( +213 )</Text></View>,
            "label": "Algeria"
        },
        {
            "value": "AmericanSamoa",
            "dial_code": "+1 684",
            "code": "AS",
            "icon": () => <View style={styles.viewIcon}><Flag code='AS' size={32} /><Text> ( +1 684 )</Text></View>,
            "label": "AmericanSamoa"
        },
        {
            "value": "Andorra",
            "dial_code": "+376",
            "code": "AD",
            "icon": () => <View style={styles.viewIcon}><Flag code='AD' size={32} /><Text> ( +376 )</Text></View>,
            "label": "Andorra"
        },
        {
            "value": "Angola",
            "dial_code": "+244",
            "code": "AO",
            "icon": () => <View style={styles.viewIcon}><Flag code='AO' size={32} /><Text> ( +244 )</Text></View>,
            "label": "Angola"
        },
        {
            "value": "Anguilla",
            "dial_code": "+1 324",
            "code": "AI",
            "icon": () => <View style={styles.viewIcon}><Flag code='AI' size={32} /><Text> ( +1 324 )</Text></View>,
            "label": "Anguilla"
        }]
//     {
//         "value": "Antigua and Barbuda",
//         "dial_code": "+1328",
//         "code": "AG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AG' size={32} /><Text> ( +1328 )</Text></View>,
//         "label": "Antigua and Barbuda"
//     },
//     {
//         "value": "Argentina",
//         "dial_code": "+54",
//         "code": "AR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AR' size={32} /><Text> ( +54 )</Text></View>,
//         "label": "Argentina"
//     },
//     {
//         "value": "Armenia",
//         "dial_code": "+374",
//         "code": "AM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AM' size={32} /><Text> ( +374 )</Text></View>,
//         "label": "Armenia"
//     },
//     {
//         "value": "Aruba",
//         "dial_code": "+297",
//         "code": "AW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AW' size={32} /><Text> ( +297 )</Text></View>,
//         "label": "Aruba"
//     },
//     {
//         "value": "Australia",
//         "dial_code": "+61",
//         "code": "AU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AU' size={32} /><Text> ( +61 )</Text></View>,
//         "label": "Australia"
//     },
//     {
//         "value": "Austria",
//         "dial_code": "+43",
//         "code": "AT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AT' size={32} /><Text> ( +43 )</Text></View>,
//         "label": "Austria"
//     },
//     {
//         "value": "Azerbaijan",
//         "dial_code": "+994",
//         "code": "AZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AZ' size={32} /><Text> ( +994 )</Text></View>,
//         "label": "Azerbaijan"
//     },
//     {
//         "value": "Bahamas",
//         "dial_code": "+1 242",
//         "code": "BS",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BS' size={32} /><Text> ( +1 242 )</Text></View>,
//         "label": "Bahamas"
//     },
//     {
//         "value": "Bahrain",
//         "dial_code": "+973",
//         "code": "BH",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BH' size={32} /><Text> ( +973 )</Text></View>,
//         "label": "Bahrain"
//     },
//     {
//         "value": "Bangladesh",
//         "dial_code": "+880",
//         "code": "BD",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BD' size={32} /><Text> ( +880 )</Text></View>,
//         "label": "Bangladesh"
//     },
//     {
//         "value": "Barbados",
//         "dial_code": "+1 246",
//         "code": "BB",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BB' size={32} /><Text> ( +1 246 )</Text></View>,
//         "label": "Barbados"
//     },
//     {
//         "value": "Belarus",
//         "dial_code": "+375",
//         "code": "BY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BY' size={32} /><Text> ( +375 )</Text></View>,
//         "label": "Belarus"
//     },
//     {
//         "value": "Belgium",
//         "dial_code": "+32",
//         "code": "BE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BE' size={32} /><Text> ( +32 )</Text></View>,
//         "label": "Belgium"
//     },
//     {
//         "value": "Belize",
//         "dial_code": "+501",
//         "code": "BZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BZ' size={32} /><Text> ( +501 )</Text></View>,
//         "label": "Belize"
//     },
//     {
//         "value": "Benin",
//         "dial_code": "+229",
//         "code": "BJ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BJ' size={32} /><Text> ( +229 )</Text></View>,
//         "label": "Benin"
//     },
//     {
//         "value": "Bermuda",
//         "dial_code": "+1 441",
//         "code": "BM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BM' size={32} /><Text> ( +1 441 )</Text></View>,
//         "label": "Bermuda"
//     },
//     {
//         "value": "Bhutan",
//         "dial_code": "+975",
//         "code": "BT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BT' size={32} /><Text> ( +975 )</Text></View>,
//         "label": "Bhutan"
//     },
//     {
//         "value": "Bosnia and Herzegovina",
//         "dial_code": "+387",
//         "code": "BA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BA' size={32} /><Text> ( +387 )</Text></View>,
//         "label": "Bosnia and Herzegovina"
//     },
//     {
//         "value": "Botswana",
//         "dial_code": "+327",
//         "code": "BW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BW' size={32} /><Text> ( +327 )</Text></View>,
//         "label": "Botswana"
//     },
//     {
//         "value": "Brazil",
//         "dial_code": "+55",
//         "code": "BR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BR' size={32} /><Text> ( +55 )</Text></View>,
//         "label": "Brazil"
//     },
//     {
//         "value": "British Indian Ocean Territory",
//         "dial_code": "+246",
//         "code": "IO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IO' size={32} /><Text> ( +246 )</Text></View>,
//         "label": "British Indian Ocean Territory"
//     },
//     {
//         "value": "Bulgaria",
//         "dial_code": "+359",
//         "code": "BG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BG' size={32} /><Text> ( +359 )</Text></View>,
//         "label": "Bulgaria"
//     },
//     {
//         "value": "Burkina Faso",
//         "dial_code": "+232",
//         "code": "BF",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BF' size={32} /><Text> ( +232 )</Text></View>,
//         "label": "Burkina Faso"
//     },
//     {
//         "value": "Burundi",
//         "dial_code": "+257",
//         "code": "BI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BI' size={32} /><Text> ( +257 )</Text></View>,
//         "label": "Burundi"
//     },
//     {
//         "value": "Cambodia",
//         "dial_code": "+855",
//         "code": "KH",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KH' size={32} /><Text> ( +855 )</Text></View>,
//         "label": "Cambodia"
//     },
//     {
//         "value": "Cameroon",
//         "dial_code": "+237",
//         "code": "CM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CM' size={32} /><Text> ( +237 )</Text></View>,
//         "label": "Cameroon"
//     },
//     {
//         "value": "Canada",
//         "dial_code": "+1",
//         "code": "CA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CA' size={32} /><Text> ( +1 )</Text></View>,
//         "label": "Canada"
//     },
//     {
//         "value": "Cape Verde",
//         "dial_code": "+238",
//         "code": "CV",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CV' size={32} /><Text> ( +238 )</Text></View>,
//         "label": "Cape Verde"
//     },
//     {
//         "value": "Cayman Islands",
//         "dial_code": "+ 345",
//         "code": "KY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KY' size={32} /><Text> ( + 345 )</Text></View>,
//         "label": "Cayman Islands"
//     },
//     {
//         "value": "Central African Republic",
//         "dial_code": "+236",
//         "code": "CF",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CF' size={32} /><Text> ( +236 )</Text></View>,
//         "label": "Central African Republic"
//     },
//     {
//         "value": "Chad",
//         "dial_code": "+235",
//         "code": "TD",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TD' size={32} /><Text> ( +235 )</Text></View>,
//         "label": "Chad"
//     },
//     {
//         "value": "Chile",
//         "dial_code": "+56",
//         "code": "CL",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CL' size={32} /><Text> ( +56 )</Text></View>,
//         "label": "Chile"
//     },
//     {
//         "value": "China",
//         "dial_code": "+86",
//         "code": "CN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CN' size={32} /><Text> ( +86 )</Text></View>,
//         "label": "China"
//     },
//     {
//         "value": "Christmas Island",
//         "dial_code": "+61",
//         "code": "CX",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CX' size={32} /><Text> ( +61 )</Text></View>,
//         "label": "Christmas Island"
//     },
//     {
//         "value": "Colombia",
//         "dial_code": "+57",
//         "code": "CO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CO' size={32} /><Text> ( +57 )</Text></View>,
//         "label": "Colombia"
//     },
//     {
//         "value": "Comoros",
//         "dial_code": "+329",
//         "code": "KM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KM' size={32} /><Text> ( +329 )</Text></View>,
//         "label": "Comoros"
//     },
//     {
//         "value": "Congo",
//         "dial_code": "+242",
//         "code": "CG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CG' size={32} /><Text> ( +242 )</Text></View>,
//         "label": "Congo"
//     },
//     {
//         "value": "Cook Islands",
//         "dial_code": "+682",
//         "code": "CK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CK' size={32} /><Text> ( +682 )</Text></View>,
//         "label": "Cook Islands"
//     },
//     {
//         "value": "Costa Rica",
//         "dial_code": "+506",
//         "code": "CR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CR' size={32} /><Text> ( +506 )</Text></View>,
//         "label": "Costa Rica"
//     },
//     {
//         "value": "Croatia",
//         "dial_code": "+385",
//         "code": "HR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='HR' size={32} /><Text> ( +385 )</Text></View>,
//         "label": "Croatia"
//     },
//     {
//         "value": "Cuba",
//         "dial_code": "+53",
//         "code": "CU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CU' size={32} /><Text> ( +53 )</Text></View>,
//         "label": "Cuba"
//     },
//     {
//         "value": "Cyprus",
//         "dial_code": "+537",
//         "code": "CY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CY' size={32} /><Text> ( +537 )</Text></View>,
//         "label": "Cyprus"
//     },
//     {
//         "value": "Czech Republic",
//         "dial_code": "+420",
//         "code": "CZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CZ' size={32} /><Text> ( +420 )</Text></View>,
//         "label": "Czech Republic"
//     },
//     {
//         "value": "Denmark",
//         "dial_code": "+45",
//         "code": "DK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='DK' size={32} /><Text> ( +45 )</Text></View>,
//         "label": "Denmark"
//     },
//     {
//         "value": "Djibouti",
//         "dial_code": "+253",
//         "code": "DJ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='DJ' size={32} /><Text> ( +253 )</Text></View>,
//         "label": "Djibouti"
//     },
//     {
//         "value": "Dominica",
//         "dial_code": "+1 767",
//         "code": "DM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='DM' size={32} /><Text> ( +1 767 )</Text></View>,
//         "label": "Dominica"
//     },
//     {
//         "value": "Dominican Republic",
//         "dial_code": "+1 849",
//         "code": "DO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='DO' size={32} /><Text> ( +1 849 )</Text></View>,
//         "label": "Dominican Republic"
//     },
//     {
//         "value": "Ecuador",
//         "dial_code": "+593",
//         "code": "EC",
//         "icon": () => <View style={styles.viewIcon}><Flag code='EC' size={32} /><Text> ( +593 )</Text></View>,
//         "label": "Ecuador"
//     },
//     {
//         "value": "Egypt",
//         "dial_code": "+20",
//         "code": "EG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='EG' size={32} /><Text> ( +20 )</Text></View>,
//         "label": "Egypt"
//     },
//     {
//         "value": "El Salvador",
//         "dial_code": "+503",
//         "code": "SV",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SV' size={32} /><Text> ( +503 )</Text></View>,
//         "label": "El Salvador"
//     },
//     {
//         "value": "Equatorial Guinea",
//         "dial_code": "+240",
//         "code": "GQ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GQ' size={32} /><Text> ( +240 )</Text></View>,
//         "label": "Equatorial Guinea"
//     },
//     {
//         "value": "Eritrea",
//         "dial_code": "+291",
//         "code": "ER",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ER' size={32} /><Text> ( +291 )</Text></View>,
//         "label": "Eritrea"
//     },
//     {
//         "value": "Estonia",
//         "dial_code": "+372",
//         "code": "EE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='EE' size={32} /><Text> ( +372 )</Text></View>,
//         "label": "Estonia"
//     },
//     {
//         "value": "Ethiopia",
//         "dial_code": "+251",
//         "code": "ET",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ET' size={32} /><Text> ( +251 )</Text></View>,
//         "label": "Ethiopia"
//     },
//     {
//         "value": "Faroe Islands",
//         "dial_code": "+298",
//         "code": "FO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='FO' size={32} /><Text> ( +298 )</Text></View>,
//         "label": "Faroe Islands"
//     },
//     {
//         "value": "Fiji",
//         "dial_code": "+679",
//         "code": "FJ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='FJ' size={32} /><Text> ( +679 )</Text></View>,
//         "label": "Fiji"
//     },
//     {
//         "value": "Finland",
//         "dial_code": "+358",
//         "code": "FI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='FI' size={32} /><Text> ( +358 )</Text></View>,
//         "label": "Finland"
//     },
//     {
//         "value": "France",
//         "dial_code": "+33",
//         "code": "FR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='FR' size={32} /><Text> ( +33 )</Text></View>,
//         "label": "France"
//     },
//     {
//         "value": "French Guiana",
//         "dial_code": "+594",
//         "code": "GF",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GF' size={32} /><Text> ( +594 )</Text></View>,
//         "label": "French Guiana"
//     },
//     {
//         "value": "French Polynesia",
//         "dial_code": "+689",
//         "code": "PF",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PF' size={32} /><Text> ( +689 )</Text></View>,
//         "label": "French Polynesia"
//     },
//     {
//         "value": "Gabon",
//         "dial_code": "+241",
//         "code": "GA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GA' size={32} /><Text> ( +241 )</Text></View>,
//         "label": "Gabon"
//     },
//     {
//         "value": "Gambia",
//         "dial_code": "+220",
//         "code": "GM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GM' size={32} /><Text> ( +220 )</Text></View>,
//         "label": "Gambia"
//     },
//     {
//         "value": "Georgia",
//         "dial_code": "+995",
//         "code": "GE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GE' size={32} /><Text> ( +995 )</Text></View>,
//         "label": "Georgia"
//     },
//     {
//         "value": "Germany",
//         "dial_code": "+49",
//         "code": "DE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='DE' size={32} /><Text> ( +49 )</Text></View>,
//         "label": "Germany"
//     },
//     {
//         "value": "Ghana",
//         "dial_code": "+233",
//         "code": "GH",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GH' size={32} /><Text> ( +233 )</Text></View>,
//         "label": "Ghana"
//     },
//     {
//         "value": "Gibraltar",
//         "dial_code": "+350",
//         "code": "GI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GI' size={32} /><Text> ( +350 )</Text></View>,
//         "label": "Gibraltar"
//     },
//     {
//         "value": "Greece",
//         "dial_code": "+30",
//         "code": "GR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GR' size={32} /><Text> ( +30 )</Text></View>,
//         "label": "Greece"
//     },
//     {
//         "value": "Greenland",
//         "dial_code": "+299",
//         "code": "GL",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GL' size={32} /><Text> ( +299 )</Text></View>,
//         "label": "Greenland"
//     },
//     {
//         "value": "Grenada",
//         "dial_code": "+1 473",
//         "code": "GD",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GD' size={32} /><Text> ( +1 473 )</Text></View>,
//         "label": "Grenada"
//     },
//     {
//         "value": "Guadeloupe",
//         "dial_code": "+590",
//         "code": "GP",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GP' size={32} /><Text> ( +590 )</Text></View>,
//         "label": "Guadeloupe"
//     },
//     {
//         "value": "Guam",
//         "dial_code": "+1 671",
//         "code": "GU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GU' size={32} /><Text> ( +1 671 )</Text></View>,
//         "label": "Guam"
//     },
//     {
//         "value": "Guatemala",
//         "dial_code": "+502",
//         "code": "GT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GT' size={32} /><Text> ( +502 )</Text></View>,
//         "label": "Guatemala"
//     },
//     {
//         "value": "Guinea",
//         "dial_code": "+224",
//         "code": "GN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GN' size={32} /><Text> ( +224 )</Text></View>,
//         "label": "Guinea"
//     },
//     {
//         "value": "Guinea-Bissau",
//         "dial_code": "+245",
//         "code": "GW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GW' size={32} /><Text> ( +245 )</Text></View>,
//         "label": "Guinea-Bissau"
//     },
//     {
//         "value": "Guyana",
//         "dial_code": "+595",
//         "code": "GY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GY' size={32} /><Text> ( +595 )</Text></View>,
//         "label": "Guyana"
//     },
//     {
//         "value": "Haiti",
//         "dial_code": "+509",
//         "code": "HT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='HT' size={32} /><Text> ( +509 )</Text></View>,
//         "label": "Haiti"
//     },
//     {
//         "value": "Honduras",
//         "dial_code": "+504",
//         "code": "HN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='HN' size={32} /><Text> ( +504 )</Text></View>,
//         "label": "Honduras"
//     },
//     {
//         "value": "Hungary",
//         "dial_code": "+36",
//         "code": "HU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='HU' size={32} /><Text> ( +36 )</Text></View>,
//         "label": "Hungary"
//     },
//     {
//         "value": "Iceland",
//         "dial_code": "+354",
//         "code": "IS",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IS' size={32} /><Text> ( +354 )</Text></View>,
//         "label": "Iceland"
//     },
//     {
//         "value": "India",
//         "dial_code": "+91",
//         "code": "IN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IN' size={32} /><Text> ( +91 )</Text></View>,
//         "label": "India"
//     },
//     {
//         "value": "Indonesia",
//         "dial_code": "+62",
//         "code": "ID",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ID' size={32} /><Text> ( +62 )</Text></View>,
//         "label": "Indonesia"
//     },
//     {
//         "value": "Iraq",
//         "dial_code": "+964",
//         "code": "IQ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IQ' size={32} /><Text> ( +964 )</Text></View>,
//         "label": "Iraq"
//     },
//     {
//         "value": "Ireland",
//         "dial_code": "+353",
//         "code": "IE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IE' size={32} /><Text> ( +353 )</Text></View>,
//         "label": "Ireland"
//     },
//     {
//         "value": "Israel",
//         "dial_code": "+972",
//         "code": "IL",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IL' size={32} /><Text> ( +972 )</Text></View>,
//         "label": "Israel"
//     },
//     {
//         "value": "Italy",
//         "dial_code": "+39",
//         "code": "IT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IT' size={32} /><Text> ( +39 )</Text></View>,
//         "label": "Italy"
//     },
//     {
//         "value": "Jamaica",
//         "dial_code": "+1 876",
//         "code": "JM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='JM' size={32} /><Text> ( +1 876 )</Text></View>,
//         "label": "Jamaica"
//     },
//     {
//         "value": "Japan",
//         "dial_code": "+81",
//         "code": "JP",
//         "icon": () => <View style={styles.viewIcon}><Flag code='JP' size={32} /><Text> ( +81 )</Text></View>,
//         "label": "Japan"
//     },
//     {
//         "value": "Jordan",
//         "dial_code": "+962",
//         "code": "JO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='JO' size={32} /><Text> ( +962 )</Text></View>,
//         "label": "Jordan"
//     },
//     {
//         "value": "Kazakhstan",
//         "dial_code": "+7 7",
//         "code": "KZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KZ' size={32} /><Text> ( +7 7 )</Text></View>,
//         "label": "Kazakhstan"
//     },
//     {
//         "value": "Kenya",
//         "dial_code": "+254",
//         "code": "KE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KE' size={32} /><Text> ( +254 )</Text></View>,
//         "label": "Kenya"
//     },
//     {
//         "value": "Kiribati",
//         "dial_code": "+686",
//         "code": "KI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KI' size={32} /><Text> ( +686 )</Text></View>,
//         "label": "Kiribati"
//     },
//     {
//         "value": "Kuwait",
//         "dial_code": "+965",
//         "code": "KW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KW' size={32} /><Text> ( +965 )</Text></View>,
//         "label": "Kuwait"
//     },
//     {
//         "value": "Kyrgyzstan",
//         "dial_code": "+996",
//         "code": "KG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KG' size={32} /><Text> ( +996 )</Text></View>,
//         "label": "Kyrgyzstan"
//     },
//     {
//         "value": "Latvia",
//         "dial_code": "+371",
//         "code": "LV",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LV' size={32} /><Text> ( +371 )</Text></View>,
//         "label": "Latvia"
//     },
//     {
//         "value": "Lebanon",
//         "dial_code": "+961",
//         "code": "LB",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LB' size={32} /><Text> ( +961 )</Text></View>,
//         "label": "Lebanon"
//     },
//     {
//         "value": "Lesotho",
//         "dial_code": "+326",
//         "code": "LS",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LS' size={32} /><Text> ( +326 )</Text></View>,
//         "label": "Lesotho"
//     },
//     {
//         "value": "Liberia",
//         "dial_code": "+231",
//         "code": "LR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LR' size={32} /><Text> ( +231 )</Text></View>,
//         "label": "Liberia"
//     },
//     {
//         "value": "Liechtenstein",
//         "dial_code": "+423",
//         "code": "LI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LI' size={32} /><Text> ( +423 )</Text></View>,
//         "label": "Liechtenstein"
//     },
//     {
//         "value": "Lithuania",
//         "dial_code": "+370",
//         "code": "LT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LT' size={32} /><Text> ( +370 )</Text></View>,
//         "label": "Lithuania"
//     },
//     {
//         "value": "Luxembourg",
//         "dial_code": "+352",
//         "code": "LU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LU' size={32} /><Text> ( +352 )</Text></View>,
//         "label": "Luxembourg"
//     },
//     {
//         "value": "Madagascar",
//         "dial_code": "+321",
//         "code": "MG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MG' size={32} /><Text> ( +321 )</Text></View>,
//         "label": "Madagascar"
//     },
//     {
//         "value": "Malawi",
//         "dial_code": "+325",
//         "code": "MW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MW' size={32} /><Text> ( +325 )</Text></View>,
//         "label": "Malawi"
//     },
//     {
//         "value": "Malaysia",
//         "dial_code": "+60",
//         "code": "MY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MY' size={32} /><Text> ( +60 )</Text></View>,
//         "label": "Malaysia"
//     },
//     {
//         "value": "Maldives",
//         "dial_code": "+960",
//         "code": "MV",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MV' size={32} /><Text> ( +960 )</Text></View>,
//         "label": "Maldives"
//     },
//     {
//         "value": "Mali",
//         "dial_code": "+223",
//         "code": "ML",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ML' size={32} /><Text> ( +223 )</Text></View>,
//         "label": "Mali"
//     },
//     {
//         "value": "Malta",
//         "dial_code": "+356",
//         "code": "MT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MT' size={32} /><Text> ( +356 )</Text></View>,
//         "label": "Malta"
//     },
//     {
//         "value": "Marshall Islands",
//         "dial_code": "+692",
//         "code": "MH",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MH' size={32} /><Text> ( +692 )</Text></View>,
//         "label": "Marshall Islands"
//     },
//     {
//         "value": "Martinique",
//         "dial_code": "+596",
//         "code": "MQ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MQ' size={32} /><Text> ( +596 )</Text></View>,
//         "label": "Martinique"
//     },
//     {
//         "value": "Mauritania",
//         "dial_code": "+222",
//         "code": "MR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MR' size={32} /><Text> ( +222 )</Text></View>,
//         "label": "Mauritania"
//     },
//     {
//         "value": "Mauritius",
//         "dial_code": "+230",
//         "code": "MU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MU' size={32} /><Text> ( +230 )</Text></View>,
//         "label": "Mauritius"
//     },
//     {
//         "value": "Mayotte",
//         "dial_code": "+322",
//         "code": "YT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='YT' size={32} /><Text> ( +322 )</Text></View>,
//         "label": "Mayotte"
//     },
//     {
//         "value": "Mexico",
//         "dial_code": "+52",
//         "code": "MX",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MX' size={32} /><Text> ( +52 )</Text></View>,
//         "label": "Mexico"
//     },
//     {
//         "value": "Monaco",
//         "dial_code": "+377",
//         "code": "MC",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MC' size={32} /><Text> ( +377 )</Text></View>,
//         "label": "Monaco"
//     },
//     {
//         "value": "Mongolia",
//         "dial_code": "+976",
//         "code": "MN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MN' size={32} /><Text> ( +976 )</Text></View>,
//         "label": "Mongolia"
//     },
//     {
//         "value": "Montenegro",
//         "dial_code": "+382",
//         "code": "ME",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ME' size={32} /><Text> ( +382 )</Text></View>,
//         "label": "Montenegro"
//     },
//     {
//         "value": "Montserrat",
//         "dial_code": "+1664",
//         "code": "MS",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MS' size={32} /><Text> ( +1664 )</Text></View>,
//         "label": "Montserrat"
//     },
//     {
//         "value": "Morocco",
//         "dial_code": "+212",
//         "code": "MA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MA' size={32} /><Text> ( +212 )</Text></View>,
//         "label": "Morocco"
//     },
//     {
//         "value": "Myanmar",
//         "dial_code": "+95",
//         "code": "MM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MM' size={32} /><Text> ( +95 )</Text></View>,
//         "label": "Myanmar"
//     },
//     {
//         "value": "Namibia",
//         "dial_code": "+324",
//         "code": "NA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NA' size={32} /><Text> ( +324 )</Text></View>,
//         "label": "Namibia"
//     },
//     {
//         "value": "Nauru",
//         "dial_code": "+674",
//         "code": "NR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NR' size={32} /><Text> ( +674 )</Text></View>,
//         "label": "Nauru"
//     },
//     {
//         "value": "Nepal",
//         "dial_code": "+977",
//         "code": "NP",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NP' size={32} /><Text> ( +977 )</Text></View>,
//         "label": "Nepal"
//     },
//     {
//         "value": "Netherlands",
//         "dial_code": "+31",
//         "code": "NL",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NL' size={32} /><Text> ( +31 )</Text></View>,
//         "label": "Netherlands"
//     },
//     {
//         "value": "Netherlands Antilles",
//         "dial_code": "+599",
//         "code": "AN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AN' size={32} /><Text> ( +599 )</Text></View>,
//         "label": "Netherlands Antilles"
//     },
//     {
//         "value": "New Caledonia",
//         "dial_code": "+687",
//         "code": "NC",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NC' size={32} /><Text> ( +687 )</Text></View>,
//         "label": "New Caledonia"
//     },
//     {
//         "value": "New Zealand",
//         "dial_code": "+64",
//         "code": "NZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NZ' size={32} /><Text> ( +64 )</Text></View>,
//         "label": "New Zealand"
//     },
//     {
//         "value": "Nicaragua",
//         "dial_code": "+505",
//         "code": "NI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NI' size={32} /><Text> ( +505 )</Text></View>,
//         "label": "Nicaragua"
//     },
//     {
//         "value": "Niger",
//         "dial_code": "+227",
//         "code": "NE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NE' size={32} /><Text> ( +227 )</Text></View>,
//         "label": "Niger"
//     },
//     {
//         "value": "Nigeria",
//         "dial_code": "+234",
//         "code": "NG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NG' size={32} /><Text> ( +234 )</Text></View>,
//         "label": "Nigeria"
//     },
//     {
//         "value": "Niue",
//         "dial_code": "+683",
//         "code": "NU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NU' size={32} /><Text> ( +683 )</Text></View>,
//         "label": "Niue"
//     },
//     {
//         "value": "Norfolk Island",
//         "dial_code": "+672",
//         "code": "NF",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NF' size={32} /><Text> ( +672 )</Text></View>,
//         "label": "Norfolk Island"
//     },
//     {
//         "value": "Northern Mariana Islands",
//         "dial_code": "+1 670",
//         "code": "MP",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MP' size={32} /><Text> ( +1 670 )</Text></View>,
//         "label": "Northern Mariana Islands"
//     },
//     {
//         "value": "Norway",
//         "dial_code": "+47",
//         "code": "NO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='NO' size={32} /><Text> ( +47 )</Text></View>,
//         "label": "Norway"
//     },
//     {
//         "value": "Oman",
//         "dial_code": "+968",
//         "code": "OM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='OM' size={32} /><Text> ( +968 )</Text></View>,
//         "label": "Oman"
//     },
//     {
//         "value": "Pakistan",
//         "dial_code": "+92",
//         "code": "PK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PK' size={32} /><Text> ( +92 )</Text></View>,
//         "label": "Pakistan"
//     },
//     {
//         "value": "Palau",
//         "dial_code": "+680",
//         "code": "PW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PW' size={32} /><Text> ( +680 )</Text></View>,
//         "label": "Palau"
//     },
//     {
//         "value": "Panama",
//         "dial_code": "+507",
//         "code": "PA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PA' size={32} /><Text> ( +507 )</Text></View>,
//         "label": "Panama"
//     },
//     {
//         "value": "Papua New Guinea",
//         "dial_code": "+675",
//         "code": "PG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PG' size={32} /><Text> ( +675 )</Text></View>,
//         "label": "Papua New Guinea"
//     },
//     {
//         "value": "Paraguay",
//         "dial_code": "+595",
//         "code": "PY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PY' size={32} /><Text> ( +595 )</Text></View>,
//         "label": "Paraguay"
//     },
//     {
//         "value": "Peru",
//         "dial_code": "+51",
//         "code": "PE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PE' size={32} /><Text> ( +51 )</Text></View>,
//         "label": "Peru"
//     },
//     {
//         "value": "Philippines",
//         "dial_code": "+63",
//         "code": "PH",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PH' size={32} /><Text> ( +63 )</Text></View>,
//         "label": "Philippines"
//     },
//     {
//         "value": "Poland",
//         "dial_code": "+48",
//         "code": "PL",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PL' size={32} /><Text> ( +48 )</Text></View>,
//         "label": "Poland"
//     },
//     {
//         "value": "Portugal",
//         "dial_code": "+351",
//         "code": "PT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PT' size={32} /><Text> ( +351 )</Text></View>,
//         "label": "Portugal"
//     },
//     {
//         "value": "Puerto Rico",
//         "dial_code": "+1 939",
//         "code": "PR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PR' size={32} /><Text> ( +1 939 )</Text></View>,
//         "label": "Puerto Rico"
//     },
//     {
//         "value": "Qatar",
//         "dial_code": "+974",
//         "code": "QA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='QA' size={32} /><Text> ( +974 )</Text></View>,
//         "label": "Qatar"
//     },
//     {
//         "value": "Romania",
//         "dial_code": "+40",
//         "code": "RO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='RO' size={32} /><Text> ( +40 )</Text></View>,
//         "label": "Romania"
//     },
//     {
//         "value": "Rwanda",
//         "dial_code": "+250",
//         "code": "RW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='RW' size={32} /><Text> ( +250 )</Text></View>,
//         "label": "Rwanda"
//     },
//     {
//         "value": "Samoa",
//         "dial_code": "+685",
//         "code": "WS",
//         "icon": () => <View style={styles.viewIcon}><Flag code='WS' size={32} /><Text> ( +685 )</Text></View>,
//         "label": "Samoa"
//     },
//     {
//         "value": "San Marino",
//         "dial_code": "+378",
//         "code": "SM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SM' size={32} /><Text> ( +378 )</Text></View>,
//         "label": "San Marino"
//     },
//     {
//         "value": "Saudi Arabia",
//         "dial_code": "+966",
//         "code": "SA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SA' size={32} /><Text> ( +966 )</Text></View>,
//         "label": "Saudi Arabia"
//     },
//     {
//         "value": "Senegal",
//         "dial_code": "+221",
//         "code": "SN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SN' size={32} /><Text> ( +221 )</Text></View>,
//         "label": "Senegal"
//     },
//     {
//         "value": "Serbia",
//         "dial_code": "+381",
//         "code": "RS",
//         "icon": () => <View style={styles.viewIcon}><Flag code='RS' size={32} /><Text> ( +381 )</Text></View>,
//         "label": "Serbia"
//     },
//     {
//         "value": "Seychelles",
//         "dial_code": "+248",
//         "code": "SC",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SC' size={32} /><Text> ( +248 )</Text></View>,
//         "label": "Seychelles"
//     },
//     {
//         "value": "Sierra Leone",
//         "dial_code": "+232",
//         "code": "SL",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SL' size={32} /><Text> ( +232 )</Text></View>,
//         "label": "Sierra Leone"
//     },
//     {
//         "value": "Singapore",
//         "dial_code": "+65",
//         "code": "SG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SG' size={32} /><Text> ( +65 )</Text></View>,
//         "label": "Singapore"
//     },
//     {
//         "value": "Slovakia",
//         "dial_code": "+421",
//         "code": "SK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SK' size={32} /><Text> ( +421 )</Text></View>,
//         "label": "Slovakia"
//     },
//     {
//         "value": "Slovenia",
//         "dial_code": "+386",
//         "code": "SI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SI' size={32} /><Text> ( +386 )</Text></View>,
//         "label": "Slovenia"
//     },
//     {
//         "value": "Solomon Islands",
//         "dial_code": "+677",
//         "code": "SB",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SB' size={32} /><Text> ( +677 )</Text></View>,
//         "label": "Solomon Islands"
//     },
//     {
//         "value": "South Africa",
//         "dial_code": "+27",
//         "code": "ZA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ZA' size={32} /><Text> ( +27 )</Text></View>,
//         "label": "South Africa"
//     },
//     {
//         "value": "South Georgia and the South Sandwich Islands",
//         "dial_code": "+500",
//         "code": "GS",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GS' size={32} /><Text> ( +500 )</Text></View>,
//         "label": "South Georgia and the South Sandwich Islands"
//     },
//     {
//         "value": "Spain",
//         "dial_code": "+34",
//         "code": "ES",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ES' size={32} /><Text> ( +34 )</Text></View>,
//         "label": "Spain"
//     },
//     {
//         "value": "Sri Lanka",
//         "dial_code": "+94",
//         "code": "LK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LK' size={32} /><Text> ( +94 )</Text></View>,
//         "label": "Sri Lanka"
//     },
//     {
//         "value": "Sudan",
//         "dial_code": "+249",
//         "code": "SD",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SD' size={32} /><Text> ( +249 )</Text></View>,
//         "label": "Sudan"
//     },
//     {
//         "value": "Surivalue",
//         "dial_code": "+597",
//         "code": "SR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SR' size={32} /><Text> ( +597 )</Text></View>,
//         "label": "Surivalue"
//     },
//     {
//         "value": "Swaziland",
//         "dial_code": "+328",
//         "code": "SZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SZ' size={32} /><Text> ( +328 )</Text></View>,
//         "label": "Swaziland"
//     },
//     {
//         "value": "Sweden",
//         "dial_code": "+46",
//         "code": "SE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SE' size={32} /><Text> ( +46 )</Text></View>,
//         "label": "Sweden"
//     },
//     {
//         "value": "Switzerland",
//         "dial_code": "+41",
//         "code": "CH",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CH' size={32} /><Text> ( +41 )</Text></View>,
//         "label": "Switzerland"
//     },
//     {
//         "value": "Tajikistan",
//         "dial_code": "+992",
//         "code": "TJ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TJ' size={32} /><Text> ( +992 )</Text></View>,
//         "label": "Tajikistan"
//     },
//     {
//         "value": "Thailand",
//         "dial_code": "+66",
//         "code": "TH",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TH' size={32} /><Text> ( +66 )</Text></View>,
//         "label": "Thailand"
//     },
//     {
//         "value": "Togo",
//         "dial_code": "+228",
//         "code": "TG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TG' size={32} /><Text> ( +228 )</Text></View>,
//         "label": "Togo"
//     },
//     {
//         "value": "Tokelau",
//         "dial_code": "+690",
//         "code": "TK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TK' size={32} /><Text> ( +690 )</Text></View>,
//         "label": "Tokelau"
//     },
//     {
//         "value": "Tonga",
//         "dial_code": "+676",
//         "code": "TO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TO' size={32} /><Text> ( +676 )</Text></View>,
//         "label": "Tonga"
//     },
//     {
//         "value": "Trinidad and Tobago",
//         "dial_code": "+1 868",
//         "code": "TT",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TT' size={32} /><Text> ( +1 868 )</Text></View>,
//         "label": "Trinidad and Tobago"
//     },
//     {
//         "value": "Tunisia",
//         "dial_code": "+216",
//         "code": "TN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TN' size={32} /><Text> ( +216 )</Text></View>,
//         "label": "Tunisia"
//     },
//     {
//         "value": "Turkey",
//         "dial_code": "+90",
//         "code": "TR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TR' size={32} /><Text> ( +90 )</Text></View>,
//         "label": "Turkey"
//     },
//     {
//         "value": "Turkmenistan",
//         "dial_code": "+993",
//         "code": "TM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TM' size={32} /><Text> ( +993 )</Text></View>,
//         "label": "Turkmenistan"
//     },
//     {
//         "value": "Turks and Caicos Islands",
//         "dial_code": "+1 649",
//         "code": "TC",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TC' size={32} /><Text> ( +1 649 )</Text></View>,
//         "label": "Turks and Caicos Islands"
//     },
//     {
//         "value": "Tuvalu",
//         "dial_code": "+688",
//         "code": "TV",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TV' size={32} /><Text> ( +688 )</Text></View>,
//         "label": "Tuvalu"
//     },
//     {
//         "value": "Uganda",
//         "dial_code": "+256",
//         "code": "UG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='UG' size={32} /><Text> ( +256 )</Text></View>,
//         "label": "Uganda"
//     },
//     {
//         "value": "Ukraine",
//         "dial_code": "+380",
//         "code": "UA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='UA' size={32} /><Text> ( +380 )</Text></View>,
//         "label": "Ukraine"
//     },
//     {
//         "value": "United Arab Emirates",
//         "dial_code": "+971",
//         "code": "AE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AE' size={32} /><Text> ( +971 )</Text></View>,
//         "label": "United Arab Emirates"
//     },
//     {
//         "value": "United Kingdom",
//         "dial_code": "+44",
//         "code": "GB",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GB' size={32} /><Text> ( +44 )</Text></View>,
//         "label": "United Kingdom"
//     },
//     {
//         "value": "United States",
//         "dial_code": "+1",
//         "code": "US",
//         "icon": () => <View style={styles.viewIcon}><Flag code='US' size={32} /><Text> ( +1 )</Text></View>,
//         "label": "United States"
//     },
//     {
//         "value": "Uruguay",
//         "dial_code": "+598",
//         "code": "UY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='UY' size={32} /><Text> ( +598 )</Text></View>,
//         "label": "Uruguay"
//     },
//     {
//         "value": "Uzbekistan",
//         "dial_code": "+998",
//         "code": "UZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='UZ' size={32} /><Text> ( +998 )</Text></View>,
//         "label": "Uzbekistan"
//     },
//     {
//         "value": "Vanuatu",
//         "dial_code": "+678",
//         "code": "VU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='VU' size={32} /><Text> ( +678 )</Text></View>,
//         "label": "Vanuatu"
//     },
//     {
//         "value": "Wallis and Futuna",
//         "dial_code": "+681",
//         "code": "WF",
//         "icon": () => <View style={styles.viewIcon}><Flag code='WF' size={32} /><Text> ( +681 )</Text></View>,
//         "label": "Wallis and Futuna"
//     },
//     {
//         "value": "Yemen",
//         "dial_code": "+967",
//         "code": "YE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='YE' size={32} /><Text> ( +967 )</Text></View>,
//         "label": "Yemen"
//     },
//     {
//         "value": "Zambia",
//         "dial_code": "+320",
//         "code": "ZM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ZM' size={32} /><Text> ( +320 )</Text></View>,
//         "label": "Zambia"
//     },
//     {
//         "value": "Zimbabwe",
//         "dial_code": "+323",
//         "code": "ZW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ZW' size={32} /><Text> ( +323 )</Text></View>,
//         "label": "Zimbabwe"
//     },
//     {
//         "value": "land Islands",
//         "dial_code": "",
//         "code": "AX",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AX' size={32} /><Text> (  )</Text></View>,
//         "label": "land Islands"
//     },
//     {
//         "value": "Antarctica",
//         "dial_code": null,
//         "code": "AQ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='AQ' size={32} /><Text> ( null )</Text></View>,
//         "label": "Antarctica"
//     },
//     {
//         "value": "Bolivia, Plurinational State of",
//         "dial_code": "+591",
//         "code": "BO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BO' size={32} /><Text> ( +591 )</Text></View>,
//         "label": "Bolivia, Plurinational State of"
//     },
//     {
//         "value": "Brunei Darussalam",
//         "dial_code": "+673",
//         "code": "BN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BN' size={32} /><Text> ( +673 )</Text></View>,
//         "label": "Brunei Darussalam"
//     },
//     {
//         "value": "Cocos (Keeling) Islands",
//         "dial_code": "+61",
//         "code": "CC",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CC' size={32} /><Text> ( +61 )</Text></View>,
//         "label": "Cocos (Keeling) Islands"
//     },
//     {
//         "value": "Congo, The Democratic Republic of the",
//         "dial_code": "+243",
//         "code": "CD",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CD' size={32} /><Text> ( +243 )</Text></View>,
//         "label": "Congo, The Democratic Republic of the"
//     },
//     {
//         "value": "Cote d'Ivoire",
//         "dial_code": "+225",
//         "code": "CI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='CI' size={32} /><Text> ( +225 )</Text></View>,
//         "label": "Cote d'Ivoire"
//     },
//     {
//         "value": "Falkland Islands (Malvinas)",
//         "dial_code": "+500",
//         "code": "FK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='FK' size={32} /><Text> ( +500 )</Text></View>,
//         "label": "Falkland Islands (Malvinas)"
//     },
//     {
//         "value": "Guernsey",
//         "dial_code": "+44",
//         "code": "GG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='GG' size={32} /><Text> ( +44 )</Text></View>,
//         "label": "Guernsey"
//     },
//     {
//         "value": "Holy See (Vatican City State)",
//         "dial_code": "+379",
//         "code": "VA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='VA' size={32} /><Text> ( +379 )</Text></View>,
//         "label": "Holy See (Vatican City State)"
//     },
//     {
//         "value": "Hong Kong",
//         "dial_code": "+852",
//         "code": "HK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='HK' size={32} /><Text> ( +852 )</Text></View>,
//         "label": "Hong Kong"
//     },
//     {
//         "value": "Iran, Islamic Republic of",
//         "dial_code": "+98",
//         "code": "IR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IR' size={32} /><Text> ( +98 )</Text></View>,
//         "label": "Iran, Islamic Republic of"
//     },
//     {
//         "value": "Isle of Man",
//         "dial_code": "+44",
//         "code": "IM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='IM' size={32} /><Text> ( +44 )</Text></View>,
//         "label": "Isle of Man"
//     },
//     {
//         "value": "Jersey",
//         "dial_code": "+44",
//         "code": "JE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='JE' size={32} /><Text> ( +44 )</Text></View>,
//         "label": "Jersey"
//     },
//     {
//         "value": "Korea, Democratic People's Republic of",
//         "dial_code": "+850",
//         "code": "KP",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KP' size={32} /><Text> ( +850 )</Text></View>,
//         "label": "Korea, Democratic People's Republic of"
//     },
//     {
//         "value": "Korea, Republic of",
//         "dial_code": "+82",
//         "code": "KR",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KR' size={32} /><Text> ( +82 )</Text></View>,
//         "label": "Korea, Republic of"
//     },
//     {
//         "value": "Lao People's Democratic Republic",
//         "dial_code": "+856",
//         "code": "LA",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LA' size={32} /><Text> ( +856 )</Text></View>,
//         "label": "Lao People's Democratic Republic"
//     },
//     {
//         "value": "Libyan Arab Jamahiriya",
//         "dial_code": "+218",
//         "code": "LY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LY' size={32} /><Text> ( +218 )</Text></View>,
//         "label": "Libyan Arab Jamahiriya"
//     },
//     {
//         "value": "Macao",
//         "dial_code": "+853",
//         "code": "MO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MO' size={32} /><Text> ( +853 )</Text></View>,
//         "label": "Macao"
//     },
//     {
//         "value": "Macedonia, The Former Yugoslav Republic of",
//         "dial_code": "+389",
//         "code": "MK",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MK' size={32} /><Text> ( +389 )</Text></View>,
//         "label": "Macedonia, The Former Yugoslav Republic of"
//     },
//     {
//         "value": "Micronesia, Federated States of",
//         "dial_code": "+691",
//         "code": "FM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='FM' size={32} /><Text> ( +691 )</Text></View>,
//         "label": "Micronesia, Federated States of"
//     },
//     {
//         "value": "Moldova, Republic of",
//         "dial_code": "+373",
//         "code": "MD",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MD' size={32} /><Text> ( +373 )</Text></View>,
//         "label": "Moldova, Republic of"
//     },
//     {
//         "value": "Mozambique",
//         "dial_code": "+258",
//         "code": "MZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MZ' size={32} /><Text> ( +258 )</Text></View>,
//         "label": "Mozambique"
//     },
//     {
//         "value": "Palestinian Territory, Occupied",
//         "dial_code": "+970",
//         "code": "PS",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PS' size={32} /><Text> ( +970 )</Text></View>,
//         "label": "Palestinian Territory, Occupied"
//     },
//     {
//         "value": "Pitcairn",
//         "dial_code": "+872",
//         "code": "PN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PN' size={32} /><Text> ( +872 )</Text></View>,
//         "label": "Pitcairn"
//     },
//     {
//         "value": "Réunion",
//         "dial_code": "+322",
//         "code": "RE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='RE' size={32} /><Text> ( +322 )</Text></View>,
//         "label": "Réunion"
//     },
//     {
//         "value": "Russia",
//         "dial_code": "+7",
//         "code": "RU",
//         "icon": () => <View style={styles.viewIcon}><Flag code='RU' size={32} /><Text> ( +7 )</Text></View>,
//         "label": "Russia"
//     },
//     {
//         "value": "Saint Barthélemy",
//         "dial_code": "+590",
//         "code": "BL",
//         "icon": () => <View style={styles.viewIcon}><Flag code='BL' size={32} /><Text> ( +590 )</Text></View>,
//         "label": "Saint Barthélemy"
//     },
//     {
//         "value": "Saint Helena, Ascension and Tristan Da Cunha",
//         "dial_code": "+290",
//         "code": "SH",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SH' size={32} /><Text> ( +290 )</Text></View>,
//         "label": "Saint Helena, Ascension and Tristan Da Cunha"
//     },
//     {
//         "value": "Saint Kitts and Nevis",
//         "dial_code": "+1 869",
//         "code": "KN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='KN' size={32} /><Text> ( +1 869 )</Text></View>,
//         "label": "Saint Kitts and Nevis"
//     },
//     {
//         "value": "Saint Lucia",
//         "dial_code": "+1 758",
//         "code": "LC",
//         "icon": () => <View style={styles.viewIcon}><Flag code='LC' size={32} /><Text> ( +1 758 )</Text></View>,
//         "label": "Saint Lucia"
//     },
//     {
//         "value": "Saint Martin",
//         "dial_code": "+590",
//         "code": "MF",
//         "icon": () => <View style={styles.viewIcon}><Flag code='MF' size={32} /><Text> ( +590 )</Text></View>,
//         "label": "Saint Martin"
//     },
//     {
//         "value": "Saint Pierre and Miquelon",
//         "dial_code": "+508",
//         "code": "PM",
//         "icon": () => <View style={styles.viewIcon}><Flag code='PM' size={32} /><Text> ( +508 )</Text></View>,
//         "label": "Saint Pierre and Miquelon"
//     },
//     {
//         "value": "Saint Vincent and the Grenadines",
//         "dial_code": "+1 784",
//         "code": "VC",
//         "icon": () => <View style={styles.viewIcon}><Flag code='VC' size={32} /><Text> ( +1 784 )</Text></View>,
//         "label": "Saint Vincent and the Grenadines"
//     },
//     {
//         "value": "Sao Tome and Principe",
//         "dial_code": "+239",
//         "code": "ST",
//         "icon": () => <View style={styles.viewIcon}><Flag code='ST' size={32} /><Text> ( +239 )</Text></View>,
//         "label": "Sao Tome and Principe"
//     },
//     {
//         "value": "Somalia",
//         "dial_code": "+252",
//         "code": "SO",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SO' size={32} /><Text> ( +252 )</Text></View>,
//         "label": "Somalia"
//     },
//     {
//         "value": "Svalbard and Jan Mayen",
//         "dial_code": "+47",
//         "code": "SJ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SJ' size={32} /><Text> ( +47 )</Text></View>,
//         "label": "Svalbard and Jan Mayen"
//     },
//     {
//         "value": "Syrian Arab Republic",
//         "dial_code": "+963",
//         "code": "SY",
//         "icon": () => <View style={styles.viewIcon}><Flag code='SY' size={32} /><Text> ( +963 )</Text></View>,
//         "label": "Syrian Arab Republic"
//     },
//     {
//         "value": "Taiwan, Province of China",
//         "dial_code": "+886",
//         "code": "TW",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TW' size={32} /><Text> ( +886 )</Text></View>,
//         "label": "Taiwan, Province of China"
//     },
//     {
//         "value": "Tanzania, United Republic of",
//         "dial_code": "+255",
//         "code": "TZ",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TZ' size={32} /><Text> ( +255 )</Text></View>,
//         "label": "Tanzania, United Republic of"
//     },
//     {
//         "value": "Timor-Leste",
//         "dial_code": "+670",
//         "code": "TL",
//         "icon": () => <View style={styles.viewIcon}><Flag code='TL' size={32} /><Text> ( +670 )</Text></View>,
//         "label": "Timor-Leste"
//     },
//     {
//         "value": "Venezuela, Bolivarian Republic of",
//         "dial_code": "+58",
//         "code": "VE",
//         "icon": () => <View style={styles.viewIcon}><Flag code='VE' size={32} /><Text> ( +58 )</Text></View>,
//         "label": "Venezuela, Bolivarian Republic of"
//     },
//     {
//         "value": "Viet Nam",
//         "dial_code": "+84",
//         "code": "VN",
//         "icon": () => <View style={styles.viewIcon}><Flag code='VN' size={32} /><Text> ( +84 )</Text></View>,
//         "label": "Viet Nam"
//     },
//     {
//         "value": "Virgin Islands, British",
//         "dial_code": "+1 284",
//         "code": "VG",
//         "icon": () => <View style={styles.viewIcon}><Flag code='VG' size={32} /><Text> ( +1 284 )</Text></View>,
//         "label": "Virgin Islands, British"
//     },
//     {
//         "value": "Virgin Islands, U.S.",
//         "dial_code": "+1 340",
//         "code": "VI",
//         "icon": () => <View style={styles.viewIcon}><Flag code='VI' size={32} /><Text> ( +1 340 )</Text></View>,
//         "label": "Virgin Islands, U.S."
//     }
// ]



const styles = StyleSheet.create({
    viewIcon: { flexDirection: 'row', alignItems: 'center' }
})
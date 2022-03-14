import React from 'react'
import { SectionList, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { Spacer } from '../components/Spacer';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", ]
    }
];

export const SectionListScreen = () => {
    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            
            <SectionList
                sections={casas}
                ListHeaderComponent={() => <HeaderTitle title='Section List' />}
                ListFooterComponent={() => <HeaderTitle title={'Total de casa ' + casas.length } />}
                renderItem={ ({item}) => <Text>{item}</Text> }
                keyExtractor={(item, index) => item + index}
                stickySectionHeadersEnabled
                renderSectionHeader={ ({section}) => (
                    <View style={{ backgroundColor:'white' }}>
                        <HeaderTitle title={ section.casa } />
                    </View>
                )}
                renderSectionFooter={({section}) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />
                )}
                SectionSeparatorComponent={() => <Spacer />}
                ItemSeparatorComponent={() => <Spacer />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

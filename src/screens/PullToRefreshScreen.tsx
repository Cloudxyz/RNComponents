import React from 'react'
import { RefreshControl, ScrollView } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            setData('Hola Mundo');
        }, 1500);
    }

  return (
    <ScrollView style={styles.globalMargin}
        refreshControl={
            <RefreshControl 
                refreshing={ refreshing }
                onRefresh={ onRefresh }
                progressViewOffset={ 10 }
            />
        }
    >
        <HeaderTitle title="Pull to Refresh" />
        {
            data && <HeaderTitle title={ data } />
        }
    </ScrollView>
  )
}

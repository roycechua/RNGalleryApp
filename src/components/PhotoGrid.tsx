import React from 'react'
import { Dimensions, FlatList, Image } from 'react-native'

import { formatPhotoUri } from '../api/picsum'

export default function PhotoGrid({ photos, numColumns, onEndReached }: {photos:Array<string>, numColumns: number, onEndReached: VoidFunction}) {
  const { width } = Dimensions.get('window')

  const size = width / numColumns

  return (
    <FlatList
      data={photos}
      keyExtractor={(item: any) => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }: { item: any }) => (
        <Image
          source={{
            width: size,
            height: size,
            uri: formatPhotoUri(item.id, size, size),
          }}
        />
      )}
    />
  )
}
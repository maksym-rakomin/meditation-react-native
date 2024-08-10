import {GalleryPreviewData} from "@/constants/models/AffirmationCategory";
import {FC} from "react";
import {FlatList, Pressable, Text, View, Image} from "react-native";
import {Link} from "expo-router";


interface Props {
  title: string;
  preview: GalleryPreviewData[];
}

const GuidedAffirmationsGallery: FC<Props> = ({ title, preview }) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>

      <View className="space-y-2">
        <FlatList
          data={preview}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4">
                  <Image source={item.image} resizeMode="cover" className="w-full h-full" />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
}

export default GuidedAffirmationsGallery;
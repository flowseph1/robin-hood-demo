import { Card } from "@/components/card";
import { ThemedText } from "@/components/typography/themed-text";
import { USDollar } from "@/lib/utils";
import { View } from "react-native";

const LIST = [
  {
    name: "Bitcoin",
    coinName: "BTC",
    price: 35350.1,
  },
  {
    name: "Dogecoin",
    coinName: "DOGE",
    price: 0.234636,
  },
];

export function HomeLists() {
  return (
    <Card>
      <View className="px-6 py-3 gap-7">
        <ThemedText intent={"card-title"} classNames="pt-7">
          Lists
        </ThemedText>
        {LIST.map((item) => (
          <View
            key={item.name}
            className="flex-row items-center justify-between"
          >
            <View>
              <ThemedText classNames="text-lg">{item.coinName}</ThemedText>
              <ThemedText intent="subtle">{item.name}</ThemedText>
            </View>

            <View className="h-fit py-2 px-4 bg-primary rounded-lg items-center justify-center">
              <ThemedText classNames="text-white text-md">
                {USDollar.format(item.price)}
              </ThemedText>
            </View>
          </View>
        ))}
      </View>
    </Card>
  );
}

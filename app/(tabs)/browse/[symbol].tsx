import { AnimatedView } from "@/components/animated-view";
import { LoadingIndicator } from "@/components/loading-indicator";
import { Header } from "@/components/navigation/header";
import { SymbolAbout } from "@/components/symbol/symbol-about";
import { SymbolChart } from "@/components/symbol/symbol-chart";
import { SymbolStats } from "@/components/symbol/symbol-stats";
import { useTheme } from "@/hooks/use-theme";
import { getCompanyOverview, getGlobalQuote } from "@/lib/api-request";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Alert, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useQuery } from "react-query";

export default function SymbolDetailScreen() {
  const { colors } = useTheme();

  /* get the symbol param from the route */
  const { symbol } = useLocalSearchParams<{
    symbol: string;
  }>();

  /* get global company quote */
  const { data: companyGlobalQuoteData, isLoading: isLoadingCompanyQuotes } =
    useQuery({
      queryFn: () => getGlobalQuote(symbol!),
      queryKey: ["company-quotes", symbol],
      onError: (error) => {
        if (error instanceof Error) {
          Alert.alert(error.message);
        }

        console.log(error);
      },
      enabled: !!symbol,
    });

  /* get company overview */
  const { data: companyOverviewData, isLoading: isLoadingCompanyOverview } =
    useQuery({
      queryFn: () => getCompanyOverview(symbol!),
      queryKey: ["company-overview", symbol],
      onError: (error) => {
        if (error instanceof Error) {
          Alert.alert(error.message);
        }
        console.log(error);
      },
    });

  const scrollY = useSharedValue(0);

  /* catch scroll positions to make header animation */
  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      className="flex-1 bg-foreground"
      bounces={false}
      onScroll={handleScroll}
      contentContainerStyle={{
        flexGrow: 1,
        gap: 24,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <Header
              title={companyGlobalQuoteData?.["Global Quote"]["05. price"]}
              subtitle={companyGlobalQuoteData?.["Global Quote"]["01. symbol"]}
              scrollY={scrollY}
              left={
                <TouchableOpacity onPress={() => router.back()}>
                  <Entypo
                    name="chevron-thin-left"
                    size={24}
                    color={colors["--color-primary"]}
                  />
                </TouchableOpacity>
              }
              right={
                <View className="flex-row gap-7">
                  <TouchableOpacity>
                    <Feather
                      name="share"
                      size={24}
                      color={colors["--color-primary"]}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Ionicons
                      name="checkmark-circle"
                      size={24}
                      color={colors["--color-primary"]}
                    />
                  </TouchableOpacity>
                </View>
              }
            />
          ),
        }}
      />

      {companyGlobalQuoteData && companyOverviewData && (
        <AnimatedView>
          <SymbolChart
            companyOverviewData={companyOverviewData}
            companyGlobalQuoteData={companyGlobalQuoteData["Global Quote"]}
          />
        </AnimatedView>
      )}

      {isLoadingCompanyQuotes && <LoadingIndicator />}

      {companyGlobalQuoteData && companyOverviewData && (
        <AnimatedView delay={300}>
          <SymbolStats
            companyGlobalQuoteData={companyGlobalQuoteData["Global Quote"]}
            companyOverviewData={companyOverviewData}
          />
        </AnimatedView>
      )}

      {companyOverviewData && companyGlobalQuoteData && (
        <AnimatedView delay={500}>
          <SymbolAbout companyOverviewData={companyOverviewData} />
        </AnimatedView>
      )}
    </Animated.ScrollView>
  );
}

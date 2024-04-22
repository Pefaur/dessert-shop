import React, {useState} from 'react';
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  EyeIcon,
  HStack,
  ScrollView,
  StatusBar,
  View,
} from '@gluestack-ui/themed';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Dessert} from '../../../types';
import {formatNumber} from '../../../utils';
import useDessertDetail from '../hooks/useDessertDetail';
import QuantitySelector from '../components/QuantitySelector';
import BagIcon from '../../../assets/icons/BagIcon';
import DessertDetailCard from '../components/DessertDetailCard';
import usePurchase from '../hooks/usePurchase';
import IngredientActionSheet from '../components/IngredientActionSheet';
import {DessertStackParamList} from '../../../navigation/NavigationParams';
import TransparentNavBar from '../../../components/TransparentNavBar';

const DessertDetailScreen: React.FC = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<DessertStackParamList>>();
  const {params} = useRoute();
  const {dessert} = params as {dessert: Dessert};
  const {dessertDetail, quantity, setQuantity, loading, error} =
    useDessertDetail(dessert.idMeal);
  const {addProductToCart} = usePurchase();
  const [showActionsheet, setShowActionsheet] = useState(false);
  const {ingredients} = dessertDetail;

  const handlePurchase = async () => {
    await addProductToCart({dessert, dessertDetail, quantity});
    navigate('PurchaseProcess');
  };

  const showIngredientActionSheet = () => setShowActionsheet(true);
  const hideIngredientsActionSheet = () => setShowActionsheet(false);

  return (
    <View flex={1} backgroundColor="white">
      <TransparentNavBar />
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <DessertDetailCard
          id={dessert.idMeal}
          image={dessert.strMealThumb}
          title={dessert.strMeal}
          description={dessertDetail.instructions}
          // TODO: se puede mover formatNumber a la fuente de datos,
          // para evitar ejectuarlo en cada renderizado
          price={formatNumber(dessert.idMeal)}
        />
        <Button
          size="md"
          borderRadius={25}
          height={50}
          mx={20}
          onPress={showIngredientActionSheet}>
          <ButtonIcon as={EyeIcon} mr="$2" />
          <ButtonText fontWeight="200">Ingredientes</ButtonText>
        </Button>
      </ScrollView>
      <View
        backgroundColor="white"
        px={20}
        py={20}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        hardShadow="1">
        <HStack justifyContent="space-between" alignItems="center">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <Button
            size="xl"
            borderRadius={25}
            height={50}
            isDisabled={!!error || loading}
            onPress={handlePurchase}>
            <ButtonIcon as={BagIcon} mr="$2" />
            <ButtonText fontWeight="200">Comprar</ButtonText>
          </Button>
        </HStack>
      </View>
      <IngredientActionSheet
        isVisible={showActionsheet}
        onClose={hideIngredientsActionSheet}
        ingredients={ingredients}
      />
    </View>
  );
};

export default DessertDetailScreen;

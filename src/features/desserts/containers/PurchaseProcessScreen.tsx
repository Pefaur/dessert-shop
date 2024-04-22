import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomSlider from '../components/CustomSlider';
import {Purchase} from '../../../types';
import usePurchase from '../hooks/usePurchase';
import TransparentNavBar from '../../../components/TransparentNavBar';
import IngredientSelectionStep from '../components/IngredientSelectionStep';
import FormStep from '../components/FormStep';
import SuccessStep from '../components/SuccessStep';
import {delay} from '../../../utils';

const PurchaseProcessScreen: React.FC = () => {
  const {reset} = useNavigation();
  const [cart, setCart] = useState<Purchase>();
  const {getCart, completePurchase} = usePurchase();
  const [form, setForm] = useState({isValid: false, data: {}});

  useEffect(() => {
    (async () => {
      const data = await getCart();
      setCart(data);
    })();
  }, []);

  const simulateNavigationToHome = async () => {
    await delay(2000);
    reset({
      index: 0,
      routes: [{name: 'Desserts'}],
    });
  };

  const onChangeForm = (data: any, isValid: boolean) => {
    setForm({data, isValid});
  };

  const handleComplete = async () => {
    if (cart) {
      completePurchase(cart);
      simulateNavigationToHome();
    }
  };

  return (
    <>
      <TransparentNavBar />
      <CustomSlider
        components={[
          <IngredientSelectionStep
            ingredients={cart?.dessertDetail?.ingredients || []}
          />,
          <FormStep onChange={onChangeForm} />,
        ]}
        stepsCompletionStatus={[true, form?.isValid]}
        endAnimationComponent={<SuccessStep />}
        onComplete={handleComplete}
      />
    </>
  );
};

export default PurchaseProcessScreen;

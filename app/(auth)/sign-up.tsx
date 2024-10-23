import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import {createUser} from "../../lib/appwrite"

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submit = async () => {
    createUser();
    // const { email, password, confirmPassword } = form;

    // if (email === "" || password === "" || confirmPassword === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   Alert.alert("Error", "Passwords do not match");
    //   return; 
    // }

    // setSubmitting(true);
    
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            placeholder="Enter Your Username"
            value={form.userName}
            handleChangeText={(e) => setForm({ ...form, userName: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            placeholder="Enter Your Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-10"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder="Enter Your Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-10"
            secureTextEntry // Ensure password is hidden
          />
          <FormField
            title="Confirm Password"
            placeholder="Retype Your Password"
            value={form.confirmPassword} // Use confirmPassword field
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
            otherStyles="mt-10"
            secureTextEntry // Ensure password is hidden
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-10"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
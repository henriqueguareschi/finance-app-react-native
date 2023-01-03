import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Conta de luz",
    value: "100,00",
    date: "15/01/2023",
    type: 0, //gastos
  },
  {
    id: 2,
    label: "Pix",
    value: "1.000,00",
    date: "07/01/2023",
    type: 1, //entradas
  },
  {
    id: 3,
    label: "Pix 2",
    value: "2.000,00",
    date: "09/01/2023",
    type: 1, //entradas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Henrique" />

      <Balance saldo="1.000,00" gastos="-430,00" />

      <Actions />

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});

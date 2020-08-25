package com.company;

public class Unu {
    public static void main(String[] args) {
        Carro unu = new Carro(2023, "Vermelho");

        System.out.println("Carro: Unu");
        System.out.println("Ano: " + unu.ano);
        System.out.println("Cor: " + unu.cor);

        unu.ligar();
        unu.acelerrar();
        unu.desligar();
    }
}

package com.company;

public class Ferrari {

    public static void main(String[] args) {
        Carro ferrari = new Carro();
        ferrari.ano = 2020;
        ferrari.cor = "Preto";

        System.out.println("Carro: Ferrai");
        System.out.println("Ano: " + ferrari.ano);
        System.out.println("Cor: " + ferrari.cor);
        ferrari.ligar();
        ferrari.acelerrar();
        ferrari.desligar();
    }
}

package com.company;

public class Fusca {
    public static void main(String[] args) {
        Carro fusca = new Carro();

        fusca.ano = 2021;
        fusca.cor = "Vermelho";

        System.out.println("Carro: Fusca");
        System.out.println("Cor: " + fusca.cor);
        System.out.println("Ano: " + fusca.ano);

        fusca.ligar();
        fusca.acelerrar();
        fusca.desligar();
    }
}

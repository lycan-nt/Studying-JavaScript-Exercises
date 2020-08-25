package com.company;

import java.util.Random;

public class Carro {
    int ano;
    String cor;

    public Carro() {
        Random gerador = new Random();
        int chassi = gerador.nextInt(100);
        System.out.println("Chassi: " + chassi);
    }

    public Carro(int ano, String cor) {
        this.ano = ano;
        this.cor = cor;
    }

    void ligar() {
        System.out.println("Engine on.....");
    }

    void desligar() {
        System.out.println("Engine OFF");
    }

    void acelerrar() {
        System.out.println("Vrunnnn....");
    }

}

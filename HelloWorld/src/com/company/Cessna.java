package com.company;

public class Cessna {
    public static void main(String[] args) {
        Aviao cessna = new Aviao();

        cessna.ano = 2020;
        cessna.cor = "Black";
        cessna.envergadura = 10;

        System.out.println("Avião: Cessna");
        System.out.println(cessna.ano);
        System.out.println(cessna.cor);
        System.out.println(cessna.envergadura);

        cessna.ligar();
        cessna.acelerrar();
        cessna.aterrizar();
        cessna.desligar();
    }
}

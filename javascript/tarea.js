const Leer = require('prompt-sync')()
Escribir = console

class ejercicios{
ejercicio1(){
  
let a, b , c,resultado
a=0;b=0;c=0
a= parseInt(Leer( "ingrese el valor de A  "))
b = parseInt(Leer("ingrese el valor de B "))
c= parseInt (Leer("ingrese el valor de C "))
resultado = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a) 
Escribir.log ( "el resultado es ",resultado)
}

ejercicio2(){
    let a , b
    let resultado
    a=  parseInt(Leer(`ingrese el primer valor `))
    b= parseInt (Leer(`ingrese el segundo valor `))
    resultado =  ((3 + 5 * 8) < 3) && (((-6 / 3 * 4) + 2) < 2) || (a > b);
    Escribir.log ("el resultado es ",resultado)
}
ejercicio3(){
  let a,b,boux 
  a= parseInt(Leer(`ingrese el valor de a`))
  b= parseInt(Leer(`ingrese el valor de b`))
  boux=a
  a=b
  b=boux
  Escribir.log("el valor de a es ", a )
  Escribir.log("el valor de b es ", b)
}
ejercicio4(){
  let a, b,c, resultado
  a=10
  b=20
  c=parseInt(Leer(`ingrese un numero `))
  resultado= a+b+c
  Escribir.log ("el resultado es ", resultado)
}
ejercicio5(){
  let a,b,resultado
  a=10
  b=parseInt(Leer (`digite un numero`))
  resultado= a+b
  Escribir.log("el resultado es ", resultado)
}
ejercicio6(){
  let a,b,resultado
  a= 10
  b= parseInt(Leer(`digite un numero `))
  resultado= a+b 
  Escribir.log ("el resultado es", resultado)
}
ejercicio7(){
  let horas,minutos,seg 
  let horas_seg, minutos_seg, total_seg
  horas=parseInt(Leer(`digite las horas`))
  minutos= parseInt(Leer(`digite los minutos `))
  seg=parseInt(Leer(`ingrese los segundos `))
  horas_seg=horas*3600
  minutos_seg=minutos * 60
  total_seg=horas_seg+minutos_seg+ seg
Escribir.log ("los segundo equivalentes son ", total_seg)
}
ejercicio8(){
  let radio,area,long
  var pi= 3.14

  radio=parseInt(Leer(`escribir ingrese el raido a calcular `))
  area= pi* radio*radio
  long= 2 * pi * radio
  Escribir.log ("el valor del area es ", area)
  Escribir.log ("la longitud es ", long)
}
ejercicio9(){
  let num_hombres,num_mujeres
  let total_estudiantes 
  let porcentajeh, porcentajeM
  num_hombres=parseInt(Leer(`digite el numero de hombres `))
  num_mujeres=parseInt(Leer(`digite el numero de mujeres `))
  total_estudiantes= num_hombres+num_mujeres
  porcentajeh= num_hombres/total_estudiantes*100
  porcentajeM= num_mujeres/total_estudiantes*100
  Escribir.log ("el porcentaje de hombres es ", porcentajeh)
  Escribir.log ("el porcentaje de mujeres es" ,porcentajeM)
}
ejercicio10(){
  let cantidadA, cantidadB, cantidadC 
  let tiempoA,tiempoB,tiempoC
  let tiempo_total 
  let horas,minutos
  cantidadA=parseInt(Leer(`digite la cantidad de cuestionarios A`))
  cantidadB=parseInt(Leer(`digite la cantidad de cuestionarios B`))
  cantidadC=parseInt(Leer(`digite la cantidad del cuestionario c`))
  
  tiempoA=cantidadA*5
  tiempoB=cantidadB*8
  tiempoC=cantidadC*6
  tiempo_total=tiempoA+tiempoB+tiempoC
  horas=Math.trunc(tiempo_total/60)
  minutos=tiempo_total % 60 
  Escribir.log ("se tardara" ,horas ,"hora" ,minutos,"minutos")
}
ejercicio11(){
  let precio, descuento,precio_final
  precio=parseInt(Leer(`digite precio a pagar`))
  descuento= precio*0.15
  precio_final=precio-descuento
  Escribir.log ("el precio a pagar es de" ,precio_final,)
}
ejercicio12(){
  let parcial1,parcial2,parcial3,promedioP,notasP 
  let examen_final,notaexamen
  let notatrabajo,notafinaltrabajo,notafinal
  parcial1=parseInt(Leer("ingrese la primera nota de los parciales "))
  parcial2=parseInt(Leer("ingrese la segunda nota "))
  parcial3=parseInt(Leer("ingrese la tercera nota "))
  promedioP=(parcial1+ parcial2 + parcial3)/3
  notasP=promedioP*0.55
examen_final=parseInt(Leer("ingrese la nota del examen final"))
notaexamen=examen_final*0.3
notatrabajo=parseInt(Leer("ingrese la nota del trabajo final"))
notafinaltrabajo=notatrabajo * 0.15
notafinal=notasP+notaexamen+notafinaltrabajo
Escribir.log ("la calificacion final es" ,notafinal)
}
ejercicio13(){
  let num
  num=parseInt(Leer("digite un numero "))
  if(num%2==0){
    Escribir.log("el numero ",num ,"es par")
  }else{
    Escribir.log ("el numero" ,num,"es impar")
  }
}
ejercicio14(){
  let nota1,nota2,nota3
  let promedio 
  nota1=parseFloat(Leer("escribir la primera nota "))
  nota2=parseFloat(Leer("escribir la segunda nota "))
  nota3=parseFloat(Leer("escribir la tercera nota "))
promedio=(nota1+nota2+nota3)/3
if(promedio>=70){
  Escribir.log ("el alumno esta aprobado con un promedio de" ,promedio)
}else{
  Escribir.log ("el alumno esta desaprobado con un promedio de" ,promedio)
}
}
ejercicio15(){
  let compra
  let descuento,precio_final
  compra=parseInt(Leer("ingrese la cantidad a pagar"))
  if(compra>100){
  descuento= compra*0.2
  }else{
    descuento=0
  }
  precio_final=compra-descuento
  Escribir.log ("el precio a pagar es" ,precio_final)
}
ejercicio16(){
  let num1,num2,resultado
  num1=parseInt(Leer("ingrese el primer numero"))
  num2=parseInt(Leer("ingrese el segundo numero "))
  if(num1==num2){
    resultado=num1*num2
  }else{
    if (num1>num2){
      resultado=num1-num2
    }else{
      resultado=num1+num2
    }
  }
  Escribir.log ("el resultado es",resultado)
}
ejercicio17(){
  let num1,num2,num3
  num1 = parseFloat(Leer('Ingrese el primer número'));
  num2 = parseFloat(Leer('Ingrese el segundo número'));
  num3 = parseFloat(Leer('Ingrese el tercer número'));
  if (num1 > num2 && num1 > num3) {
    Escribir.log("El mayor es: " , num1);
  } else {
    if (num2 > num1 && num2 > num3) {
      Escribir.log('El mayor es: ' + num2);
    } else {
      Escribir.log ('El mayor es: ' + num3);
    }
}
}
ejercicio18(){
  let precioK, kilos, precioI;
  let descuento, precio_final;
  precioK = parseFloat(Leer('Ingrese el precio por kilo'));
  kilos = parseFloat(Leer('Ingrese la cantidad de kilos'));
  precioI = precioK * kilos;
  
  if (kilos >= 0 && kilos <= 2) {
    descuento = 0;
  } else if (kilos >= 2.01 && kilos <= 5) {
    descuento = precioI * 0.1;
  } else if (kilos >= 5.01 && kilos <= 10) {
    descuento = precioI * 0.15;
  } else {
    descuento = precioI * 0.2;
  }
  
  precio_final = precioI - descuento;
  Escribir.log("el precio final es",precio_final);
}
ejercicio19(){
  let num;
  num = parseInt(Leer ('Ingrese un número del dia de la semana '));

  switch (num) {
    case 1:
      Escribir.log ('Lunes');
      break;
    case 2:
      Escribir.log ('Martes');
      break;
    case 3:
      Escribir.log ('Miércoles');
      break;
    case 4:
      Escribir.log ('Jueves');
      break;
    case 5:
      Escribir.log ('Viernes');
      break;
    case 6:
      escribir.log ('Sábado');
      break;
    case 7:
      Escribir.log ('Domingo');
      break;
    default:
      Escribir.log('Error, no existe un día para ese número');
  }
}
ejercicio20(){
  let decada;
  decada = parseInt(Leer('Ingrese una década'));

  switch (decada) {
    case 10:
      Escribir.log ('Bodas de hojalata');
      break;
    case 20:
      EscribirL.log ('Bodas de porcelana');
      break;
    case 30:
      Escribir.log ('Bodas de perlas');
      break;
    case 40:
      Escribir.log ('Bodas de rubí');
      break;
    case 50:
      Escribir.log ('Bodas de Oro');
      break;
    case 60:
      Escribir.log ('Bodas de diamantes');
      break;
    default:
      Escribir.log ('Decada no existente');
  }
}
ejercicio21(){
  let opcion;
  Escribir.log('1. Elevar un número a una potencia X');
  Escribir.log ('2. Sacar la raíz cuadrada de un número');
  Escribir.log ('3. Salir');
  Escribir.log ('Elija una opción');
  opcion = parseInt(Leer('Ingrese una opción'));

  switch (opcion) {
    case 1:
      let num, pot, resultado;
      Escribir.log ('Ingrese un número:');
      num = parseFloat(prompt('Ingrese un número'));
      Escribir.log ('Ingrese la potencia:');
      pot = parseFloat(prompt('Ingrese la potencia'));
      resultado = Math.pow(num, pot);
      Escribir.log ("El resultado es: ", resultado);
      break;
    case 2:
      let num2, resultado2;
      Escribir.log('Ingrese un número:');
      num2 = parseFloat(Leer('Ingrese un número'));
      resultado2 = Math.sqrt(num2);
      Escribir.log ("El resultado es: ", resultado2);
      break;
    case 3:
      break;
    default:
    Escribir.log('Se equivocó de opción de menú');
  }
}
ejercicio22(){
  Escribir.log ('Ejercicio 22');
  for (let i = 1; i <= 10; i++) {
    Escribir.log ("",i);
}
}
ejercicio23(){
  Escribir.log('Ejercicio 23');
  let i = 1;
  while (i <= 10) {
    Escribir.log ("",i);
    i = i + 1;
  }
}
ejercicio24(){
  Escribir.log('Ejercicio 24');
  let i = 1;
  do {
    Escribir.log("",i);
    i = i + 1;
  } while (i <= 10);
}
ejercicio25(){
  let N, suma;
  N = parseInt(Leer("Ingrese la cantidad de números a sumarse: "));
  suma = 0;
  for (let i = 1; i <= N; i++) {
    suma = suma + i;
  }
  Escribir.log("la suma es" ,suma );
}
ejercicio26(){
  let suma_pares = 0;
  let suma_impares = 0;

  for (let i = 2; i <= 49; i++) {
    if (i % 2 === 0) {
      suma_pares += i;
    } else {
      suma_impares += i;
    }
  }
Escribir.log ("la suma de los numeros pares es ",suma_pares)
  Escribir.log ("la suma de los numeros impares es"  ,suma_impares);
}
ejercicio27(){
  let num, i;
  let conteo_positivo = 0;
  let conteo_negativo = 0;
  let conteo_neutro = 0;
  for (i = 1; i <= 10; i++) {
    Escribir.log (i + ". Ingrese un número: ");
    num = parseInt(Leer ("Ingrese un número: "));
    if (num === 0) {
      conteo_neutro++;
    } else if (num > 0) {
      conteo_positivo++;
    } else {
      conteo_negativo++;
    }
  }
    Escribir.log ("la cantidad  de numeros positivos son" ,conteo_positivo);
  Escribir.log ("La cantidad de números negativos es:" , conteo_negativo);
  Escribir.log ("La cantidad de números neutros es:" , conteo_neutro);
}
ejercicio28(){
  let calificacionP, calificacionB, calificacion, suma;
  let i;
  suma = 0;
  calificacionB = 99999;
  for (i = 1; i <= 10; i++) {
    Escribir.log(i + ". Ingrese una calificación: ");
    calificacion = parseFloat(Leer("Ingrese una calificación: "));
    suma += calificacion;
    if (calificacion < calificacionB) {
      calificacionB = calificacion;
    }
  }
  calificacionP = suma / 10;
  Escribir.log("La calificación promedio es: ", calificacionP);
  Escribir.log("La calificación más baja es: ", calificacionB);
}
ejercicio29(){
  let num, i, factorial;
  do {
    num = parseInt(Leer("Ingrese un número: "));
  } while (num < 0);
  i = 1;
  factorial = 1;
  while (i <= num) {
    factorial = factorial * i;
    i = i + 1;
  }
  Escribir.log ("El factorial es: ", factorial);
}
ejercicio30(){
  let n_elementos, i, suma;

  n_elementos = parseInt(Leer ("Ingrese la cantidad de elementos a sumarse: "));
  i = 1;
  suma = 0;
  while (i <= n_elementos) {
    suma = suma + Math.pow(i, 2);
    i = i + 1;
  }
  Escribir.log ("la suma es" ,suma);
}
ejercicio31(){
  let n_elementos, i, num;
  let suma_pares = 0;
  let conteo_pares = 0;
  let suma_impares = 0;
  let conteo_impares = 0;
  let promedio_impares = 0;

  n_elementos = parseInt(Leer("Ingrese la cantidad de elementos a ingresar: "));
  i = 1;

  while (i <= n_elementos) {
    num = parseInt(Leer(i + ". Ingrese un número: "));

    if (num % 2 === 0) {
      suma_pares += num;
      conteo_pares += 1;
    } else {
      suma_impares += num;
      conteo_impares += 1;
    }

    i += 1;
  }

  if (conteo_pares === 0) {
  Escribir.log ("No se han ingresado números pares");
  } else {
    Escribir.log("La suma de los números pares es" ,suma_pares);
    Escribir.log ("El conteo de los números pares es:",conteo_pares);
  }

  if (conteo_impares === 0) {
    Escribir.log("No se han ingresado números impares");
  } else {
    promedio_impares = suma_impares / conteo_impares;
    Escribir.log("El promedio de los números impares es"  ,promedio_impares);
  }
}
ejercicio32(){
  let horast, i, hora, salario, acu;
  i = 1;
  acu = 0;

  hora = parseFloat(Leer("Ingrese el valor de pago por hora a los trabajadores"));

  while (i <= 5) {
    horast = parseFloat(Leer("Ingrese las horas trabajadas del trabajador " , i));
    salario = hora * horast;
    Escribir.log("El salario del trabajador"  , i ,  "es"   ,salario,  "por día");
    acu += salario;
    i += 1;
  }

  Escribir.log ("El salario total de todos los trabajadores es: " , acu, " por día");
}
}
ejer1= new ejercicios()


ejer1.ejercicio1()
ejer1.ejercicio2()
ejer1.ejercicio3()
ejer1.ejercicio4()
ejer1.ejercicio5()
ejer1.ejercicio6()
ejer1.ejercicio6()
ejer1.ejercicio7()
ejer1.ejercicio8()
ejer1.ejercicio9()
ejer1.ejercicio10()
ejer1.ejercicio11()
ejer1.ejercicio12()
ejer1.ejercicio13()
ejer1.ejercicio14()
ejer1.ejercicio15()
ejer1.ejercicio16()
ejer1.ejercicio17()
ejer1.ejercicio18()
ejer1.ejercicio19()
ejer1.ejercicio20()
ejer1.ejercicio21()
ejer1.ejercicio22()
ejer1.ejercicio23()
ejer1.ejercicio24()
ejer1.ejercicio25()
ejer1.ejercicio26()
ejer1.ejercicio27()
ejer1.ejercicio28()
ejer1.ejercicio29()
ejer1.ejercicio30()
ejer1.ejercicio31()
ejer1.ejercicio32()
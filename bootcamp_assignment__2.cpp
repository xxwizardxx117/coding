#include <iostream>
using namespace std;
int factorial(int n){
    if (n == 0)
    return 1 ;
    
    else
    return (n * factorial(n - 1));
}



void  display(int FACTORIAL){
    cout<<"FACTORIAL IS : "<<FACTORIAL<<endl; 
}



void condition(int n){

    cout << "Factorial Of Number N Doesen't Exists" << endl;
}




int main()
{
    int n,FACTORIAL;
    cout << "Enter The Value of N : " << endl;
    cin >> n;
    if (n < 0){
        condition(n);}
    else
    {
        FACTORIAL = factorial(n);
        display(FACTORIAL);
        }
    return 0;
}

#include <iostream>
using namespace std;
float areaofcircle(float r){
    cout <<"Area of Circle is : " << 3.14*r*r <<endl;
}
int main (){
    float r ;
    cout << "Enter the value of Radius : "; 
    cin >> r;
    areaofcircle(r);
    return 0;
}
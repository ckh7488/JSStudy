#include <iostream>

using namespace std;

int main()
{
    int a = 3;
    int *p = &a;
    int **pp = &p;
    cout << "포인터(*)로 선언된 변수 p는 주소를 저장한다. "
         << "p : " << p << endl;
    cout << "*p를 확인하면 주소값에 저장된 값을 확인 가능하다. int형 주소를 받았으므로, int의 bit만큼만 주소부터 읽어온다. "
         << "*p : " << *p << endl;
    cout << "이중포인터 pp는 pp는 p의 주소값, *pp는 p의 값(a의 주소값), **p는 a의 값을 가진다. "
         << "pp : " << pp << " *pp : " << *pp << " **pp : " << **pp << endl;

    int x[5];
    int *xp = x;
    *xp = 1;
    *(xp + 1) = 2;
    cout << x[0] << x[1] << endl;

    int y[3][5];
    y[0][0] = 1;
    cout << "y : " << &y[0][4] << "  and  "<< &y[1] <<endl;

    return 0;
}
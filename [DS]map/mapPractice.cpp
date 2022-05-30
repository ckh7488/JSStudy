#include <vector>
#include <string>
#include <map>
#include <iostream>

using namespace std;

int main()
{
    map<string, int> m;

    // 데이터 넣기 (insert)
    string tmp = "person";
    for (int i = 0; i < 100; i++)
    {
        m.insert({tmp + to_string(i), i});
    }
    // cout << m.end()->first << m.end()->second << endl;  //end는 null 같은 상태이다. 아무것도 console에 뱉지않음.


    // 데이터 검색 (find)
    auto mQuerySuccessRes = m.find("person1");
    if (mQuerySuccessRes != m.end())
        cout << "person1 is found!"<< mQuerySuccessRes->first << endl;

    auto mQueryFailRes = m.find("person123");
    if (mQueryFailRes == m.end())
        cout << "fail to find person123" << endl;
    
    //변경 : c++ 의 map은 key 값이 immutable하다. 삭제후 다시 insert하는 방법 정도가 있다.


     // 데이터 전체 접근 (iteration) ==> 쓸일 없을듯..? 애초에 iterator 쓰는거라 map에 고유 특성도 아님.
    for (auto k = m.begin(); k != m.end(); k++)
    {
        cout << "Key : " << k->first << "   value : " << k->second << endl;
    }
    cout << "size of m : " << m.size() << endl;
    

    // 데이터 삭제
    m.erase(m.begin());
    m.erase("person3");
    m.erase(m.begin(), m.end());

    cout << "data is deleted" << endl;
    cout << "size of m : " << m.size() << endl;


   

    return 0;
}
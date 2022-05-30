#include <string>
#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

bool solution(vector<string> phone_book){
    unordered_map<string,bool> myTable;
    for (auto k = phone_book.begin(); k != phone_book.end(); k++){
        myTable.insert({*k,true});
    }
    for (auto k = phone_book.begin(); k != phone_book.end(); k++){
        for(auto s=0; s<(*k).length(); s++){
            if(myTable.find((*k).substr(0,s)) != myTable.end()) return false;
        } 
    }
    return true;
}


int main()
{
    vector<string> phone_book = {"119", "97674223", "1195524421"};

    // for (auto k = phone_book.begin(); k != phone_book.end(); k++)
    // {
    //     cout << *k << endl;
    // }

    cout << solution(phone_book) << " should be " << "0" << endl;
   
}


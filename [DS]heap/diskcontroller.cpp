#include <algorithm>
#include <vector>
#include <queue>
#include <iostream>

using namespace std;

struct cmp0 {
    bool operator() (vector<int> a, vector<int> b){ return a[0] < b[0]; }
};

struct cmp1 {
    bool operator() (vector<int> a, vector<int> b){ return a[1] > b[1]; }
};


int main()
{
    vector<vector<int>> jobs = {{0, 3}, {1, 9}, {2, 6}};
    // vector<vector<int>> jobs = {{1, 4}, {2, 5}, {11, 5}, {15, 2}};
    // vector<vector<int>> jobs = [[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]];
    
    sort(jobs.begin(),jobs.end(),cmp0());
    int answer = 0;
    int cTime = 0;
    priority_queue<vector<int>, vector<vector<int>>, cmp1> pq;
    auto cur = jobs.begin();
    while(1){
        if(pq.size()==0){
            if(cur != jobs.end()) {  
                pq.push((*cur)); cTime = cTime > (*cur)[0] ? cTime: (*cur)[0] ; cur++; 
                //cout <<  cTime << ", " <<answer <<"from if" <<endl; 
            }
            else break;
        }
        while(cur != jobs.end() && (*cur)[0] <= cTime){
            // cout << (*cur)[0] << "pushed" << endl;
            pq.push((*cur)); cur++;
            
        }
        
        if(pq.size()>0 && pq.top()[0] <= cTime){
            vector<int> tmp = pq.top(); pq.pop();
            cTime += tmp[1];
            answer += cTime-tmp[0];
            // cout <<  cTime << ", " <<answer <<endl;
        }
    }
    cout << answer/jobs.size();
    return answer/jobs.size();

}



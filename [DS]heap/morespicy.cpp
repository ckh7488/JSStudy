#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int solution(vector<int> scovile, int K);

class mHeap
{
public:
    int *mArr;
    int mSize;
    int heapCount = -1;

    mHeap(vector<int> inp)
    {
        mSize = inp.size();
        mArr = new int[mSize];
        for (auto i : inp)
        {
            mInsert(i);
        }
    }
    void mInsert(int inp)
    {
        mArr[++heapCount] = inp;
        int mParent = (heapCount - 1) / 2;
        int mChild = heapCount;
        while (mChild > 0)
        {
            if (mArr[mParent] > inp)
            {
                swap(mArr[mParent], mArr[mChild]);
                mChild = mParent;
                mParent = (mParent - 1) / 2;
            }
            else
                return;
        }
    }
    int retOne()
    {
        if (heapCount < 0)
            return -1;
        int ret = mArr[0];
        mArr[0] = mArr[heapCount--];
        int parent = 0;
        int child = 1;
        while (1)
        {
            if (child > heapCount)
                break;
            if (child + 1 <= heapCount)
                child = (mArr[child] < mArr[child + 1]) ? child : child + 1;

            if (mArr[child] < mArr[parent])
            {
                swap(mArr[parent], mArr[child]);
                parent = child;
                child = parent * 2 + 1;
            }
            else
                break;
        }
        return ret;
    }

    int retCount(int k)
    {
        int ret = 0;
        while(1){
            int heapEl1 = retOne();
            if(heapEl1 >= k) { mInsert(heapEl1);  return ret; }
            int heapEl2 = retOne();
            mInsert(heapEl1+(heapEl2*2));
            ret ++;
        }
    }

    // void retMarr()
    // {
    //     cout << "heap count : " << heapCount << endl;
    //     for (int k = 0; k < heapCount + 1; k++)
    //     {
    //         cout << mArr[k] << ", ";
    //     }
    //     cout << endl;
    // }
};

int main()
{
    vector<int> inp = {1, 2, 3, 9, 10, 12};
    mHeap test(inp);
    cout << test.retCount(7);
  
}

int solution(vector<int> scoville, int K)
{
    int answer = 0;
    auto n = 0;

    return answer;
}

// 문제 특성상 힙의 크기가 늘어나진 않는 듯.

#include <vector>
#include <string>
#include <algorithm>
#include <iostream>

using namespace std;

int main()
{
    vector<vector<int>> triangle = {{7}, {3, 8}, {8, 1, 0}, {2, 7, 4, 4}, {4, 5, 2, 6, 5}};
    int memo[500][500];
    memo[0][0] = triangle[0][0];
    int mSize = triangle.size();
    int answer = 0;

    for (auto i = 1; i < mSize; i++)
    {
        for (auto j = 0; j < triangle[i].size(); j++)
        {
            auto tmp = triangle[i][j];
            if (j == 0)
            {
                memo[i][j] = tmp + memo[i - 1][j];
            }
            else if (i == j)
            {
                memo[i][j] = tmp + memo[i - 1][j - 1];
            }
            else
            {
                memo[i][j] = max(tmp + memo[i - 1][j-1], tmp + memo[i - 1][j]);
            }
        }
        // for (auto k = 0; k < triangle[i].size(); k++)
        // {
        //     cout << memo[i][k] << ',';
        // }
        // cout << endl;
    }
    for (int i = 0; i < mSize; i++)
    {
        if (answer < memo[mSize - 1][i])
            answer = memo[mSize - 1][i];
    }
    // cout << answer << endl;
    return answer;
}
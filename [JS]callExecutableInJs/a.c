#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

int main()
{
    int fd = open("./a", O_RDONLY);
    char buff[50];
    int lenRead = 1;
    int readedlen = 0;
    while (lenRead != 0 || lenRead == -1)
    {
        lenRead = read(fd, buff, sizeof(buff)-1);
        buff[lenRead] = NULL;
        readedlen += lenRead;
        printf("total len : %d", readedlen);
        printf(" string len : %d ", lenRead);
        printf("string readed : %s\n", buff);
        
    }
    return 0;
}
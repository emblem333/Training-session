#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#define MEMBER 80

int main(void)
{
    int i, j;
    int num, max;
    int tensu[MEMBER];
    int bunpu[11] = { 0 };

    printf("�l������͂��Ă��������B�F");
    do {
        scanf("%d", &num);
        if (num < 1 || num > MEMBER)
            printf("\a1�`%d�œ��͂��ĉ������B", MEMBER);
    } while (num < 1 || num > MEMBER);

    printf("%d�l�̓_������͂��ĉ������B�F\n", num);
    for (i = 0; i < num; i++) {
        printf("%2d�ԁF", i + 1);
        do {
            scanf("%d", &tensu[i]);
            if (tensu[i] < 0 || tensu[i] > 100)
                printf("\a1�`100�œ��͂��ĉ������B�F");
        } while (tensu[i] < 0 || tensu[i] > 100);
        bunpu[tensu[i] / 10]++;
    }
    printf("\n");

    max = bunpu[0];

    for (i = 1; i <= 10; i++) {
        if (max < bunpu[i]) {
            max = bunpu[i];
        }
    }

    for (i = max; i > 0; i--) {
        for (j = 0; j <= 10; j++) {
            if (i == bunpu[j]) {
                printf(" * ");
                bunpu[j]--;
            }
            else {
                printf("   ");
            }
        }
        putchar('\n');
    }
    printf("--------------------------------\n");
    printf(" 0 10 20 30 40 50 60 70 80 90 100\n");
    return 0;
}
//配列の各要素に先頭から順に1~5を代入して表示
#include<stdio.h>

int main(void)
{
	int a[5];	//int[5]型の配列

	//a[0] = 1;
	//a[1] = 2;
	//a[2] = 3;
	//a[3] = 4;
	//a[4] = 5;
	for (int i = 0; i < 5; i++) //要素に値を代入
		a[i] = i + 1;

	//printf("a[0] = %d\n", a[0]);
	//printf("a[1] = %d\n", a[1]);
	//printf("a[2] = %d\n", a[2]);
	//printf("a[3] = %d\n", a[3]);
	//printf("a[4] = %d\n", a[4]);
	for(int i = 0 ; i < 5 ; i++)
		printf("a[%d] = %d\n", i , a[i]);

	return 0;
}




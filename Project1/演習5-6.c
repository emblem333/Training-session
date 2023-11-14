
#define  _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#define NUMBER	120		

int main(void)
{
	int num;
	int date[NUMBER] = { 23 , 74 ,9 ,835 };

	printf("ÉfÅ[É^êî : ");
	scanf("%d", &num);

	for (int i = 0; i < num; i++)
		printf("%2dî‘ : %d\n", i + 1,date[i]);

	return 0;
}

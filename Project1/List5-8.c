//”z—ñ‚Ì‘S—v‘f‚Ì•À‚Ñ‚ð”½“]‚·‚é
#define	_CRT_SECURE_NO_WARNINGS
#define NUMBER 8	//8-1
#include<stdio.h>

int main(void)
{
	int x[NUMBER];								//int[NUMBER]Œ^‚Ì”z—ñ

	for (int i = 0; i < NUMBER; i++) {		//—v‘f‚É’l‚ð“Ç‚Ýž‚Þ
		printf("x[%d] : ", i);
		scanf("%d", &x[i]);
	}

	for (int i = 0; i < NUMBER/2 ; i++) {		//—v‘f‚Ì•À‚Ñ”½“]
		int t						 = x[i];		
		x[i]						 = x[(NUMBER - 1)-i];
		x[(NUMBER - 1)-1] = t;
	}
	puts("”½“]‚µ‚Ü‚µ‚½B");
	for (int i = 0; i < NUMBER; i++)		//	—v‘f‚Ì’l‚ð•\Ž¦
		printf("x[%d] = %d\n", i, x[i]);
	
	return 0;
}

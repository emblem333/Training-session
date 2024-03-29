//配列の全要素の並びを反転する
#define	_CRT_SECURE_NO_WARNINGS
#define NUMBER 8	//8-1
#include<stdio.h>

int main(void)
{
	int x[NUMBER];								//int[NUMBER]型の配列

	for (int i = 0; i < NUMBER; i++) {		//要素に値を読み込む
		printf("x[%d] : ", i);
		scanf("%d", &x[i]);
	}

	for (int i = 0; i < NUMBER/2 ; i++) {		//要素の並び反転
		int t						 = x[i];		
		x[i]						 = x[(NUMBER - 1)-i];
		x[(NUMBER - 1)-1] = t;
	}
	puts("反転しました。");
	for (int i = 0; i < NUMBER; i++)		//	要素の値を表示
		printf("x[%d] = %d\n", i, x[i]);
	
	return 0;
}

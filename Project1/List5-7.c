//�z��̗v�f�ɒl��ǂݍ���ŕ\��
#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main(void)
{
	int x[5];

	for (int i = 0; i < 5; i++) {		//�v�f�ɒl��ǂݍ���
		printf("x[%d] : ", i);
		scanf("%d", &x[i]);
	}

	for (int i = 0; i < 5; i++)	//�v�f�̒l��\��
		printf("x[%d] = %d\n", i, x[i]);

	return 0;
}
//�z��̑S�v�f�̕��т𔽓]����
#define	_CRT_SECURE_NO_WARNINGS
#define NUMBER 8	//8-1
#include<stdio.h>

int main(void)
{
	int x[NUMBER];								//int[NUMBER]�^�̔z��

	for (int i = 0; i < NUMBER; i++) {		//�v�f�ɒl��ǂݍ���
		printf("x[%d] : ", i);
		scanf("%d", &x[i]);
	}

	for (int i = 0; i < NUMBER/2 ; i++) {		//�v�f�̕��є��]
		int t						 = x[i];		
		x[i]						 = x[(NUMBER - 1)-i];
		x[(NUMBER - 1)-1] = t;
	}
	puts("���]���܂����B");
	for (int i = 0; i < NUMBER; i++)		//	�v�f�̒l��\��
		printf("x[%d] = %d\n", i, x[i]);
	
	return 0;
}

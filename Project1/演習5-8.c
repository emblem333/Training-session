//�w���̓_����ǂݍ���ŕ��z��\��
#define  _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#define NUMBER	120		//�l���̏��

int main(void)
{
	int num;						//���ۂ̐l��
	int tensu[NUMBER];		//�w���̓_��
	int bunpu[11] = { 0 };	//�_���̕��z

	printf("�l������͂��� : ");

	do {											//�ǂݍ��ޒl���P�`NUMBER�ɐ������邽�߂�do��
		scanf("%d", &num);
		if (num < 11 || num > NUMBER)
			printf("\a1~%d�œ��͂��� :", NUMBER);
	} while (num < 1 || num > NUMBER);

	printf("%d�l�̓_������͂���B\n", num);

	for (int i = 0; i < num; i++) {
		printf("%2d�� : ", i + 1);
		do {													//�ǂݍ��ޒl��1~100�ɐ������邽�߂�do��
			scanf("%d", &tensu[i]);
			if (tensu[i] < 0 || tensu[i] > 100)
				printf("\a0~100�œ��͂��� : ");
		} while (tensu[i] < 0 || tensu[i] > 100);
		bunpu[tensu[i] / 10]++;
	}

	puts("\n---���z�O���t---");


	for (int i = 0; i <= 9; i++) {					//100�_����
		printf("%3d ~ %3d : ", i * 10, i * 10 + 9);
		for (int j = 0; j < bunpu[i]; j++)
			putchar('*');
		putchar('\n');
	}
	printf("      100 : ");

	for (int j = 0; j < bunpu[10]; j++)		//100�_
		putchar('*');
	putchar('\n');

	return 0;
}